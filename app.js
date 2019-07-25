// Storage Controller


// Item Controller
const ItemCtrl = (function() {
    // Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // State
    const data = {
        items: [
            {id: 0, name: 'Steak', calories: 1200},
            {id: 1, name: 'Cookie', calories: 250},
            {id: 2, name: 'Eggs', calories: 240}

        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        }
    }
})();

// UI Controller
const UICtrl = (function() {


    return {

    }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
    return {
        init: function() {
            console.log('Initializing App...')
        }
    }
})(ItemCtrl, UICtrl);


// Initialize application
App.init();