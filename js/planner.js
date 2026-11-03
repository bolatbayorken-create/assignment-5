// The original seven-day meal content is kept exactly as in planner.html.
$(function () {
const defaultSchedule = [
        { 
          day: "Monday 🥐", 
          meals: [
            { tag: "Breakfast", name: "Cottage cheese pancakes with berry jam 🥞", kcal: 450 },
            { tag: "Lunch", name: "Chicken noodle soup 🍜", kcal: 650 },
            { tag: "Dinner", name: "Teriyaki chicken with rice 🥣", kcal: 900 }
          ]
        },
        { 
          day: "Tuesday 🍳", 
          meals: [
            { tag: "Breakfast", name: "Avocado toast with poached egg 🥑", kcal: 420 },
            { tag: "Lunch", name: "Beef pilaf 🍲", kcal: 780 },
            { tag: "Dinner", name: "Baked potatoes with herbs 🥔", kcal: 800 }
          ]
        },
        { 
          day: "Wednesday 🥣", 
          meals: [
            { tag: "Breakfast", name: "Oatmeal with banana and honey 🍌", kcal: 400 },
            { tag: "Lunch", name: "Homemade pastry & tea 🥐", kcal: 700 },
            { tag: "Dinner", name: "Spaghetti Bolognese 🍝", kcal: 900 }
          ]
        },
        { 
          day: "Thursday 🧇", 
          meals: [
            { tag: "Breakfast", name: "Scrambled eggs with toast 🍳", kcal: 430 },
            { tag: "Lunch", name: "Borscht with sour cream 🍲", kcal: 670 },
            { tag: "Dinner", name: "Stuffed bell peppers 🫑", kcal: 900 }
          ]
        },
        { 
          day: "Friday 🍕", 
          meals: [
            { tag: "Breakfast", name: "Berry pancakes 🥞", kcal: 480 },
            { tag: "Lunch", name: "Chicken and rice bowl 🥣", kcal: 720 },
            { tag: "Dinner", name: "Baked salmon with sauce 🐟", kcal: 800 }
          ]
        },
        { 
          day: "Saturday ☕", 
          meals: [
            { tag: "Breakfast", name: "Eggs & sausages breakfast 🍳", kcal: 520 },
            { tag: "Lunch", name: "Lentil soup with bread 🍞", kcal: 680 },
            { tag: "Dinner", name: "Homemade pizza 🍕", kcal: 800 }
          ]
        },
        { 
          day: "Sunday 🍰", 
          meals: [
            { tag: "Breakfast", name: "Cottage cheese casserole 🥧", kcal: 440 },
            { tag: "Lunch", name: "Fresh vegetable salad & cutlet 🧆", kcal: 660 },
            { tag: "Dinner", name: "Buckwheat with meat gravy 🥣", kcal: 900 }
          ]
        }
      ];

    function renderDays(daysCount, targetKcal) {
        const $container = $("#daysContainer").empty();
        const validDays = Math.min(7, Math.max(1, Number(daysCount) || 7));
        const baseTarget = Number(targetKcal) > 0 ? Number(targetKcal) : 2000;
        const ratio = baseTarget / 2000;

        // Three-day period uses Friday–Sunday; five-day period Monday–Friday.
        const selectedDays = validDays === 3
            ? defaultSchedule.slice(-3)
            : defaultSchedule.slice(0, validDays);

        for (const day of selectedDays) {
            const meals = day.meals.map(function (meal) {
                return { tag: meal.tag, name: meal.name,
                    kcal: Math.round(meal.kcal * ratio) };
            });
            const total = meals.reduce(function (sum, meal) {
                return sum + meal.kcal;
            }, 0);

            const $card = $("<article>").addClass("day-node");
            const $header = $("<div>").addClass("day-node-header");
            $header.append($("<span>").text(day.day));
            $header.append($("<span>").addClass("badge-kcal").text(total + " kcal"));

            const $meals = $("<ul>").addClass("meal-item-list");
            meals.forEach(function (meal) {
                const $row = $("<li>").attr({ tabindex: "0", role: "button", "aria-pressed": "false" });
                const $left = $("<div>").addClass("meal-left");
                $left.append($("<span>").addClass("meal-tag").text(meal.tag + ":"));
                $left.append($("<span>").text(meal.name));
                $row.append($left, $("<span>").addClass("meal-cal").text(meal.kcal + " kcal"));
                $meals.append($row);
            });
            $card.append($header, $meals);
            $container.append($card);
        }
    }

    function updatePlan() {
        renderDays(Number($("#daysSelect").val()), $("#targetCalories").val());
    }

    function updateProgress() {
        const $rows = $("#checklistGroup .checklist-row");
        const checked = $rows.find('input[type="checkbox"]:checked').length;
        $("#progressTracker").text(checked + "/" + $rows.length + " completed");
    }

    let newItemNumber = 0;
    function addNewProduct() {
        const $input = $("#customInput");
        const text = $input.val().trim();
        if (text === "") {
            $input.trigger("focus");
            return;
        }
        const id = "item_" + Date.now() + "_" + (++newItemNumber);
        const $row = $("<div>").addClass("checklist-row");
        const $left = $("<div>").addClass("checklist-left");
        const $checkbox = $("<input>", { type: "checkbox", id: id });
        const $label = $("<label>").attr("for", id).text(text);
        const $remove = $("<button>", { type: "button", class: "btn-delete-item", text: "×", "aria-label": "Remove " + text });
        $left.append($checkbox, $label);
        $row.append($left, $remove);
        $("#checklistGroup").append($row);
        $input.val("").trigger("focus");
        updateProgress();
    }

    // Delegation also handles elements created later.
    $("#daysContainer").on("click", ".meal-item-list li", function () {
        const $meal = $(this);
        $meal.toggleClass("eaten");
        $meal.attr("aria-pressed", String($meal.hasClass("eaten")));
    });
    $("#daysContainer").on("keydown", ".meal-item-list li", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            $(this).trigger("click");
        }
    });
    $(".btn-action").on("click", updatePlan);
    $(".btn-add").on("click", addNewProduct);
    $("#customInput").on("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addNewProduct();
        }
    });
    $("#checklistGroup").on("change", 'input[type="checkbox"]', function () {
        $(this).closest(".checklist-row").toggleClass("completed", this.checked);
        updateProgress();
    });
    $("#checklistGroup").on("click", ".btn-delete-item", function () {
        $(this).closest(".checklist-row").remove();
        updateProgress();
    });

    renderDays(7, 2000);
    updateProgress();
});
