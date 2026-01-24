// export const MEAL_DB = {
//   veg: {
//     Breakfast: [
//       { name: "Oats + Milk + Nuts", kcal: 520, protein: 28 },
//       { name: "Poha + Curd", kcal: 450, protein: 18 },
//       { name: "Upma + Peanut Chutney", kcal: 480, protein: 16 },
//       { name: "Besan Chilla + Curd", kcal: 500, protein: 26 },
//     ],
//     Lunch: [
//       { name: "Rajma + Rice + Salad", kcal: 650, protein: 28 },
//       { name: "Dal + Rice + Veg", kcal: 620, protein: 22 },
//       { name: "Chole + Roti + Salad", kcal: 680, protein: 26 },
//       { name: "Paneer Bhurji + Roti", kcal: 700, protein: 35 },
//     ],
//     Dinner: [
//       { name: "Soya Chunk Curry + Roti", kcal: 620, protein: 42 },
//       { name: "Khichdi + Curd", kcal: 580, protein: 22 },
//       { name: "Paneer + Veg + Roti", kcal: 680, protein: 34 },
//       { name: "Dal + Roti + Salad", kcal: 600, protein: 24 },
//     ],
//   },
// };

export const MEAL_DB = {
  veg: {
    Breakfast: [
      {
        name: "Besan Chilla + Curd",
        time: 20,
        ingredients: [
          { key: "besan", qty: 80, unit: "g" },
          { key: "curd_plain", qty: 150, unit: "g" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "green_chilli", qty: 5, unit: "g" },
          { key: "coriander", qty: 5, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" }
        ],
        steps: [
          "Mix besan with water, salt, and spices to form a smooth batter.",
          "Add onion, green chilli, and coriander.",
          "Heat a pan, add oil, and pour batter to form a chilla.",
          "Cook 2–3 minutes per side until golden.",
          "Serve with curd."
        ],
        tags: ["veg", "breakfast", "highProtein", "quick"]
      },
      {
        name: "Overnight Oats + Protein",
        time: 5,
        ingredients: [
          { key: "oats", qty: 60, unit: "g" },
          { key: "milk_toned", qty: 250, unit: "ml" },
          { key: "whey", qty: 30, unit: "g" },
          { key: "banana", qty: 100, unit: "g" },
          { key: "chia", qty: 8, unit: "g" }
        ],
        steps: [
          "Add oats, milk, whey, and chia seeds into a jar or bowl.",
          "Mix well so whey dissolves properly.",
          "Add banana slices on top.",
          "Cover and refrigerate for 4–8 hours.",
          "Eat cold (or let it sit 5 minutes at room temp before eating)."
        ],
        tags: ["veg", "breakfast", "highProtein", "noCook", "mealPrep"]
      },
      {
        name: "Sprouts Salad + Paneer",
        time: 10,
        ingredients: [
          { key: "mixed_sprouts", qty: 150, unit: "g" },
          { key: "paneer", qty: 100, unit: "g" },
          { key: "onion", qty: 50, unit: "g" },
          { key: "tomato", qty: 80, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" },
          { key: "coriander", qty: 5, unit: "g" },
          { key: "black_salt", qty: 2, unit: "g" }
        ],
        steps: [
          "Add sprouts, chopped onion, and tomato to a bowl.",
          "Add paneer cubes.",
          "Add lemon juice, black salt, and coriander.",
          "Mix well and serve."
        ],
        tags: ["veg", "breakfast", "highProtein", "noCook", "quick"]
      },
      {
        name: "Greek Yogurt Bowl + Nuts",
        time: 5,
        ingredients: [
          { key: "greek_yogurt", qty: 250, unit: "g" },
          { key: "banana", qty: 80, unit: "g" },
          { key: "almonds", qty: 10, unit: "g" },
          { key: "honey", qty: 8, unit: "g" }
        ],
        steps: [
          "Add greek yogurt to a bowl.",
          "Top with banana slices, almonds, and honey.",
          "Mix and eat."
        ],
        tags: ["veg", "breakfast", "highProtein", "noCook", "quick"]
      },
      {
        name: "Soya Chunks Salad",
        time: 15,
        ingredients: [
          { key: "soya_chunks", qty: 50, unit: "g" },
          { key: "onion", qty: 50, unit: "g" },
          { key: "tomato", qty: 80, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" },
          { key: "coriander", qty: 5, unit: "g" },
          { key: "black_salt", qty: 2, unit: "g" }
        ],
        steps: [
          "Soak soya chunks in hot water for 10 minutes.",
          "Squeeze out water completely and cool them down.",
          "Mix with onion, tomato, lemon juice, salt, and coriander.",
          "Serve immediately or refrigerate for meal prep."
        ],
        tags: ["veg", "breakfast", "highProtein", "mealPrep", "quick"]
      },
      {
        name: "Paneer Sandwich (Light)",
        time: 10,
        ingredients: [
          { key: "bread", qty: 50, unit: "g" },
          { key: "paneer", qty: 90, unit: "g" },
          { key: "curd_plain", qty: 50, unit: "g" },
          { key: "onion", qty: 40, unit: "g" },
          { key: "tomato", qty: 60, unit: "g" },
          { key: "black_salt", qty: 2, unit: "g" },
          { key: "pepper", qty: 1, unit: "g" }
        ],
        steps: [
          "Crumble paneer and mix with curd, black salt, and pepper.",
          "Add chopped onion and tomato and mix.",
          "Spread the paneer mix between bread slices.",
          "Cut and serve."
        ],
        tags: ["veg", "breakfast", "highProtein", "noCook", "quick", "lowCal"]
      }
    ],

    Lunch: [
      {
        name: "Rajma Bowl (Light)",
        time: 30,
        ingredients: [
          { key: "rajma_cooked", qty: 220, unit: "g" },
          { key: "rice_raw", qty: 40, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 120, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 5, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" }
        ],
        steps: [
          "Cook rice and keep aside.",
          "Heat oil, sauté onion and ginger-garlic paste.",
          "Add tomato and spices, cook until masala thickens.",
          "Add cooked rajma and simmer 8–10 minutes.",
          "Serve with a smaller portion of rice + cucumber salad + lemon."
        ],
        tags: ["veg", "lunch", "balanced", "mealPrep", "lowCal"]
      },
      {
        name: "Soya Chunk Curry + Roti",
        time: 30,
        ingredients: [
          { key: "soya_chunks", qty: 60, unit: "g" },
          { key: "roti", qty: 2, unit: "pc" },
          { key: "onion", qty: 70, unit: "g" },
          { key: "tomato", qty: 140, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Soak soya chunks in hot water for 10 minutes, then squeeze out water.",
          "Heat oil, sauté onion + ginger-garlic paste.",
          "Add tomato + spices and cook until thick.",
          "Add soya chunks and simmer 6–8 minutes.",
          "Serve hot with rotis."
        ],
        tags: ["veg", "lunch", "highProtein", "mealPrep"]
      },
      {
        name: "Paneer Salad Bowl",
        time: 10,
        ingredients: [
          { key: "paneer", qty: 150, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "tomato", qty: 120, unit: "g" },
          { key: "onion", qty: 50, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" },
          { key: "black_salt", qty: 2, unit: "g" },
          { key: "pepper", qty: 1, unit: "g" }
        ],
        steps: [
          "Chop cucumber, tomato, and onion.",
          "Add paneer cubes to a bowl.",
          "Add lemon juice, black salt, and pepper.",
          "Mix and serve."
        ],
        tags: ["veg", "lunch", "highProtein", "noCook", "quick", "lowCal"]
      },
      {
        name: "Dal + Soya Bhurji + Rice",
        time: 35,
        ingredients: [
          { key: "moong_dal_raw", qty: 60, unit: "g" },
          { key: "soya_chunks", qty: 40, unit: "g" },
          { key: "rice_raw", qty: 40, unit: "g" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Cook moong dal with salt and turmeric until soft.",
          "Soak soya chunks in hot water, squeeze, and chop roughly.",
          "Heat oil, sauté onion + ginger-garlic paste.",
          "Add tomato + spices and cook into masala.",
          "Add soya and cook 5–6 minutes (soya bhurji).",
          "Cook rice and serve with dal + soya bhurji."
        ],
        tags: ["veg", "lunch", "highProtein", "mealPrep"]
      },
      {
        name: "Paneer Bhurji + Roti",
        time: 25,
        ingredients: [
          { key: "paneer", qty: 180, unit: "g" },
          { key: "roti", qty: 2, unit: "pc" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Heat oil in a pan and sauté onion until light golden.",
          "Add tomato + spices and cook until soft.",
          "Add crumbled paneer and cook for 5–7 minutes.",
          "Serve hot with rotis."
        ],
        tags: ["veg", "lunch", "highProtein", "quick"]
      }
    ],

    Dinner: [
      {
        name: "Soya Chunk Curry + Rice (Small Rice)",
        time: 30,
        ingredients: [
          { key: "soya_chunks", qty: 60, unit: "g" },
          { key: "rice_raw", qty: 15, unit: "g" },
          { key: "onion", qty: 70, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" }
        ],
        steps: [
          "Cook rice and keep aside.",
          "Soak soya chunks in hot water for 10 minutes, then squeeze out water.",
          "Heat oil, sauté onion + ginger-garlic paste.",
          "Add tomato + spices and cook into thick masala.",
          "Add soya chunks and simmer 6–8 minutes.",
          "Serve soya curry with a small portion of rice + cucumber salad + lemon."
        ],
        tags: ["veg", "dinner", "highProtein", "mealPrep", "lowCal"]
      },
      {
        name: "Paneer Stir Fry + Salad",
        time: 20,
        ingredients: [
          { key: "paneer", qty: 150, unit: "g" },
          { key: "capsicum", qty: 120, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 100, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 5, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" }
        ],
        steps: [
          "Heat oil in a pan and sauté onion.",
          "Add capsicum and cook 3–4 minutes.",
          "Add tomato + spices and cook 2 minutes.",
          "Add paneer cubes and toss for 3–4 minutes.",
          "Serve with cucumber salad + lemon."
        ],
        tags: ["veg", "dinner", "highProtein", "lowCal", "quick"]
      },
      {
        name: "Moong Dal + Paneer Salad",
        time: 30,
        ingredients: [
          { key: "moong_dal_raw", qty: 70, unit: "g" },
          { key: "paneer", qty: 120, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" }
        ],
        steps: [
          "Cook moong dal with salt and turmeric until soft.",
          "Heat oil, sauté onion + ginger-garlic paste.",
          "Add tomato + spices and cook into masala.",
          "Mix masala into dal and simmer 3–4 minutes.",
          "Serve with paneer salad (paneer + cucumber + lemon)."
        ],
        tags: ["veg", "dinner", "highProtein", "mealPrep"]
      },
      {
        name: "Soya Bhurji + Curd",
        time: 20,
        ingredients: [
          { key: "soya_chunks", qty: 70, unit: "g" },
          { key: "curd_plain", qty: 200, unit: "g" },
          { key: "onion", qty: 70, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Soak soya chunks in hot water for 10 minutes, squeeze and chop.",
          "Heat oil, sauté onion.",
          "Add tomato + spices and cook into masala.",
          "Add soya and cook 5–6 minutes (bhurji).",
          "Serve with curd on the side."
        ],
        tags: ["veg", "dinner", "highProtein", "quick", "mealPrep"]
      },
      {
        name: "Paneer + Soya Mixed Bowl",
        time: 25,
        ingredients: [
          { key: "paneer", qty: 120, unit: "g" },
          { key: "soya_chunks", qty: 40, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "capsicum", qty: 120, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Soak soya chunks in hot water for 10 minutes, squeeze and chop.",
          "Heat oil, sauté onion and capsicum for 3–4 minutes.",
          "Add tomato + spices and cook into masala.",
          "Add soya and paneer cubes, toss for 4–5 minutes.",
          "Serve hot."
        ],
        tags: ["veg", "dinner", "highProtein", "mealPrep"]
      },
      {
        name: "Dal + Soya Soup Bowl",
        time: 30,
        ingredients: [
          { key: "moong_dal_raw", qty: 70, unit: "g" },
          { key: "soya_chunks", qty: 40, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Cook moong dal until soft (slightly watery).",
          "Soak soya chunks in hot water for 10 minutes, squeeze and chop.",
          "Heat oil, sauté onion + ginger-garlic paste.",
          "Add tomato + spices and cook into masala.",
          "Add masala + soya into dal and simmer 5–6 minutes.",
          "Serve hot like a thick soup bowl."
        ],
        tags: ["veg", "dinner", "highProtein", "mealPrep", "lowCal"]
      }
    ]
  },

  eggetarian: {
    Breakfast: [
      {
        name: "Masala Omelette + Curd",
        kcal: 360,
        protein: 30,
        time: 12,
        ingredients: [
          { key: "eggs", qty: 3, unit: "pc" },
          { key: "curd_plain", qty: 150, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 80, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 5, unit: "g" }
        ],
        steps: [
          "Beat eggs with salt and spices.",
          "Heat oil, sauté onion + tomato for 1–2 minutes.",
          "Pour egg mixture and cook until set.",
          "Serve with curd."
        ],
        tags: ["eggetarian", "breakfast", "highProtein", "quick"]
      },
      {
        name: "Egg Bhurji + Roti",
        kcal: 470,
        protein: 32,
        time: 18,
        ingredients: [
          { key: "eggs", qty: 4, unit: "pc" },
          { key: "roti", qty: 2, unit: "pc" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Heat oil, sauté onion.",
          "Add tomato + spices and cook until soft.",
          "Add beaten eggs and scramble until cooked.",
          "Serve with rotis."
        ],
        tags: ["eggetarian", "breakfast", "highProtein", "quick"]
      },
      {
        name: "Boiled Eggs + Greek Yogurt Bowl",
        kcal: 420,
        protein: 38,
        time: 8,
        ingredients: [
          { key: "eggs_boiled", qty: 4, unit: "pc" },
          { key: "greek_yogurt", qty: 200, unit: "g" },
          { key: "banana", qty: 80, unit: "g" }
        ],
        steps: [
          "Peel boiled eggs and season with salt/pepper.",
          "Add greek yogurt to a bowl and top with banana.",
          "Eat eggs on the side."
        ],
        tags: ["eggetarian", "breakfast", "highProtein", "noCook", "quick"]
      },
      {
        name: "Egg Salad Bowl",
        kcal: 380,
        protein: 30,
        time: 10,
        ingredients: [
          { key: "eggs_boiled", qty: 4, unit: "pc" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "tomato", qty: 120, unit: "g" },
          { key: "onion", qty: 50, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" },
          { key: "black_salt", qty: 2, unit: "g" }
        ],
        steps: [
          "Chop vegetables and add to a bowl.",
          "Slice boiled eggs and mix.",
          "Add lemon + black salt and serve."
        ],
        tags: ["eggetarian", "breakfast", "highProtein", "noCook", "lowCal"]
      }
    ],

    Lunch: [
      {
        name: "Egg Curry + Rice (Small Rice)",
        kcal: 520,
        protein: 34,
        time: 30,
        ingredients: [
          { key: "eggs", qty: 4, unit: "pc" },
          { key: "rice_raw", qty: 25, unit: "g" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "tomato", qty: 180, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Boil eggs and keep aside.",
          "Cook rice and keep aside.",
          "Make onion-tomato masala with oil + spices.",
          "Add eggs and simmer 5–6 minutes.",
          "Serve with small rice portion."
        ],
        tags: ["eggetarian", "lunch", "highProtein", "mealPrep"]
      },
      {
        name: "Egg Bhurji Bowl + Curd",
        kcal: 480,
        protein: 38,
        time: 20,
        ingredients: [
          { key: "eggs", qty: 5, unit: "pc" },
          { key: "curd_plain", qty: 150, unit: "g" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Sauté onion in oil.",
          "Add tomato + spices and cook.",
          "Scramble eggs until fully cooked.",
          "Serve with curd."
        ],
        tags: ["eggetarian", "lunch", "highProtein", "quick"]
      },
      {
        name: "Paneer Salad Bowl",
        kcal: 430,
        protein: 34,
        time: 10,
        ingredients: [
          { key: "paneer", qty: 150, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "tomato", qty: 120, unit: "g" },
          { key: "onion", qty: 50, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" },
          { key: "black_salt", qty: 2, unit: "g" },
          { key: "pepper", qty: 1, unit: "g" }
        ],
        steps: [
          "Chop vegetables.",
          "Add paneer cubes.",
          "Add lemon + salt + pepper and mix."
        ],
        tags: ["eggetarian", "lunch", "highProtein", "noCook", "lowCal"]
      },
      {
        name: "Rajma Bowl (Light) + Eggs",
        kcal: 560,
        protein: 38,
        time: 30,
        ingredients: [
          { key: "rajma_cooked", qty: 220, unit: "g" },
          { key: "eggs_boiled", qty: 3, unit: "pc" },
          { key: "rice_raw", qty: 15, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 120, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 5, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" }
        ],
        steps: [
          "Cook rajma masala with onion, tomato, spices.",
          "Cook a small portion of rice.",
          "Serve rajma bowl with rice + cucumber salad.",
          "Add boiled eggs on the side."
        ],
        tags: ["eggetarian", "lunch", "highProtein", "mealPrep"]
      }
    ],

    Dinner: [
      {
        name: "Egg Curry + Salad",
        kcal: 430,
        protein: 32,
        time: 25,
        ingredients: [
          { key: "eggs", qty: 4, unit: "pc" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "tomato", qty: 180, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" }
        ],
        steps: [
          "Boil eggs and keep aside.",
          "Cook onion-tomato masala with oil + spices.",
          "Add eggs and simmer 5 minutes.",
          "Serve with cucumber salad + lemon."
        ],
        tags: ["eggetarian", "dinner", "highProtein", "lowCal", "mealPrep"]
      },
      {
        name: "Paneer Stir Fry + Salad",
        kcal: 420,
        protein: 34,
        time: 20,
        ingredients: [
          { key: "paneer", qty: 150, unit: "g" },
          { key: "capsicum", qty: 120, unit: "g" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 100, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 5, unit: "g" },
          { key: "cucumber", qty: 150, unit: "g" },
          { key: "lemon", qty: 20, unit: "g" }
        ],
        steps: [
          "Sauté onion + capsicum in oil.",
          "Add tomato + spices.",
          "Add paneer cubes and toss 3–4 minutes.",
          "Serve with salad."
        ],
        tags: ["eggetarian", "dinner", "highProtein", "lowCal", "quick"]
      },
      {
        name: "Egg Bhurji + Curd",
        kcal: 460,
        protein: 38,
        time: 18,
        ingredients: [
          { key: "eggs", qty: 5, unit: "pc" },
          { key: "curd_plain", qty: 200, unit: "g" },
          { key: "onion", qty: 80, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Cook onion-tomato masala with spices.",
          "Scramble eggs until cooked.",
          "Serve with curd."
        ],
        tags: ["eggetarian", "dinner", "highProtein", "quick"]
      },
      {
        name: "Moong Dal + Boiled Eggs",
        kcal: 520,
        protein: 42,
        time: 30,
        ingredients: [
          { key: "moong_dal_raw", qty: 70, unit: "g" },
          { key: "eggs_boiled", qty: 4, unit: "pc" },
          { key: "onion", qty: 60, unit: "g" },
          { key: "tomato", qty: 150, unit: "g" },
          { key: "oil", qty: 0.5, unit: "tbsp" },
          { key: "ginger_garlic_paste", qty: 10, unit: "g" },
          { key: "spices_mix", qty: 6, unit: "g" }
        ],
        steps: [
          "Cook moong dal until soft.",
          "Make onion-tomato tadka and mix into dal.",
          "Serve with boiled eggs on the side."
        ],
        tags: ["eggetarian", "dinner", "highProtein", "mealPrep"]
      }
    ]
  },

  // nonveg: {
  //   Breakfast: [
  //     {
  //       name: "Chicken Omelette Bowl",
  //       kcal: 420,
  //       protein: 45,
  //       time: 15,
  //       ingredients: [
  //         { key: "eggs", qty: 3, unit: "pc" },
  //         { key: "chicken_breast", qty: 120, unit: "g" },
  //         { key: "onion", qty: 60, unit: "g" },
  //         { key: "tomato", qty: 80, unit: "g" },
  //         { key: "oil", qty: 0.5, unit: "tbsp" },
  //         { key: "spices_mix", qty: 6, unit: "g" }
  //       ],
  //       steps: [
  //         "Cook chicken with salt and spices until done (or use pre-cooked chicken).",
  //         "Beat eggs with salt and spices.",
  //         "Sauté onion + tomato in oil for 1 minute.",
  //         "Add chicken, then pour egg mix and cook until set."
  //       ],
  //       tags: ["nonVeg", "breakfast", "highProtein", "quick", "mealPrep"]
  //     },
  //     {
  //       name: "Boiled Eggs + Chicken Salad",
  //       kcal: 390,
  //       protein: 44,
  //       time: 10,
  //       ingredients: [
  //         { key: "eggs_boiled", qty: 3, unit: "pc" },
  //         { key: "chicken_breast", qty: 150, unit: "g" },
  //         { key: "cucumber", qty: 150, unit: "g" },
  //         { key: "tomato", qty: 120, unit: "g" },
  //         { key: "lemon", qty: 20, unit: "g" },
  //         { key: "black_salt", qty: 2, unit: "g" }
  //       ],
  //       steps: [
  //         "Slice boiled eggs.",
  //         "Mix chicken + veggies in a bowl.",
  //         "Add lemon + black salt and serve."
  //       ],
  //       tags: ["nonVeg", "breakfast", "highProtein", "noCook", "lowCal"]
  //     },
  //     {
  //       name: "Greek Yogurt + Chicken Bowl",
  //       kcal: 430,
  //       protein: 50,
  //       time: 8,
  //       ingredients: [
  //         { key: "greek_yogurt", qty: 200, unit: "g" },
  //         { key: "chicken_breast", qty: 160, unit: "g" },
  //         { key: "cucumber", qty: 150, unit: "g" },
  //         { key: "lemon", qty: 20, unit: "g" },
  //         { key: "pepper", qty: 1, unit: "g" }
  //       ],
  //       steps: [
  //         "Add greek yogurt to a bowl.",
  //         "Add cooked chicken pieces and cucumber.",
  //         "Season with lemon + pepper and mix."
  //       ],
  //       tags: ["nonVeg", "breakfast", "highProtein", "mealPrep", "quick"]
  //     },
  //     {
  //       name: "Chicken Sandwich (Light)",
  //       kcal: 420,
  //       protein: 38,
  //       time: 10,
  //       ingredients: [
  //         { key: "bread", qty: 50, unit: "g" },
  //         { key: "chicken_breast", qty: 140, unit: "g" },
  //         { key: "curd_plain", qty: 60, unit: "g" },
  //         { key: "onion", qty: 40, unit: "g" },
  //         { key: "black_salt", qty: 2, unit: "g" },
  //         { key: "pepper", qty: 1, unit: "g" }
  //       ],
  //       steps: [
  //         "Mix shredded chicken with curd + salt + pepper.",
  //         "Spread between bread slices.",
  //         "Serve."
  //       ],
  //       tags: ["nonVeg", "breakfast", "highProtein", "noCook", "quick"]
  //     }
  //   ],

  //   Lunch: [
  //     {
  //       name: "Chicken Curry + Rice (Small Rice)",
  //       kcal: 560,
  //       protein: 45,
  //       time: 35,
  //       ingredients: [
  //         { key: "chicken_breast", qty: 200, unit: "g" },
  //         { key: "rice_raw", qty: 25, unit: "g" },
  //         { key: "onion", qty: 80, unit: "g" },
  //         { key: "tomato", qty: 180, unit: "g" },
  //         { key: "oil", qty: 0.5, unit: "tbsp" },
  //         { key: "ginger_garlic_paste", qty: 10, unit: "g" },
  //         { key: "spices_mix", qty: 7, unit: "g" }
  //       ],
  //       steps: [
  //         "Cook rice and keep aside.",
  //         "Heat oil, sauté onion + ginger-garlic paste.",
  //         "Add tomato + spices and cook into masala.",
  //         "Add chicken and cook until done.",
  //         "Serve with small rice portion."
  //       ],
  //       tags: ["nonVeg", "lunch", "highProtein", "mealPrep"]
  //     },
  //     {
  //       name: "Chicken Salad Bowl",
  //       kcal: 420,
  //       protein: 50,
  //       time: 12,
  //       ingredients: [
  //         { key: "chicken_breast", qty: 200, unit: "g" },
  //         { key: "cucumber", qty: 200, unit: "g" },
  //         { key: "tomato", qty: 150, unit: "g" },
  //         { key: "onion", qty: 60, unit: "g" },
  //         { key: "lemon", qty: 20, unit: "g" },
  //         { key: "black_salt", qty: 2, unit: "g" }
  //       ],
  //       steps: [
  //         "Chop veggies and add to a bowl.",
  //         "Add cooked chicken pieces.",
  //         "Add lemon + salt and mix."
  //       ],
  //       tags: ["nonVeg", "lunch", "highProtein", "lowCal", "quick"]
  //     },
  //     {
  //       name: "Chicken Bhurji + Roti",
  //       kcal: 540,
  //       protein: 46,
  //       time: 25,
  //       ingredients: [
  //         { key: "chicken_breast", qty: 200, unit: "g" },
  //         { key: "roti", qty: 2, unit: "pc" },
  //         { key: "onion", qty: 80, unit: "g" },
  //         { key: "tomato", qty: 180, unit: "g" },
  //         { key: "oil", qty: 0.5, unit: "tbsp" },
  //         { key: "spices_mix", qty: 7, unit: "g" }
  //       ],
  //       steps: [
  //         "Heat oil and sauté onion.",
  //         "Add tomato + spices and cook.",
  //         "Add minced/shredded chicken and cook until done.",
  //         "Serve with rotis."
  //       ],
  //       tags: ["nonVeg", "lunch", "highProtein", "mealPrep"]
  //     },
  //     {
  //       name: "Chicken + Curd Bowl",
  //       kcal: 460,
  //       protein: 55,
  //       time: 10,
  //       ingredients: [
  //         { key: "chicken_breast", qty: 220, unit: "g" },
  //         { key: "curd_plain", qty: 200, unit: "g" },
  //         { key: "cucumber", qty: 150, unit: "g" },
  //         { key: "lemon", qty: 20, unit: "g" },
  //         { key: "pepper", qty: 1, unit: "g" }
  //       ],
  //       steps: [
  //         "Add curd to a bowl.",
  //         "Add cooked chicken and cucumber.",
  //         "Season with lemon + pepper and mix."
  //       ],
  //       tags: ["nonVeg", "lunch", "highProtein", "quick", "mealPrep"]
  //     }
  //   ],

  //   Dinner: [
  //     {
  //       name: "Chicken Curry + Salad",
  //       kcal: 430,
  //       protein: 50,
  //       time: 30,
  //       ingredients: [
  //         { key: "chicken_breast", qty: 200, unit: "g" },
  //         { key: "onion", qty: 80, unit: "g" },
  //         { key: "tomato", qty: 180, unit: "g" },
  //         { key: "oil", qty: 0.5, unit: "tbsp" },
  //         { key: "ginger_garlic_paste", qty: 10, unit: "g" },
  //         { key: "spices_mix", qty: 7, unit: "g" },
  //         { key: "cucumber", qty: 200, unit: "g" },
  //         { key: "lemon", qty: 20, unit: "g" }
  //       ],
  //       steps: [
  //         "Cook chicken curry using onion-tomato masala.",
  //         "Serve with cucumber salad + lemon."
  //       ],
  //       tags: ["nonVeg", "dinner", "highProtein", "lowCal", "mealPrep"]
  //     },
  //     {
  //       name: "Chicken Stir Fry + Veggies",
  //       kcal: 410,
  //       protein: 48,
  //       time: 20,
  //       ingredients: [
  //         { key: "chicken_breast", qty: 200, unit: "g" },
  //         { key: "capsicum", qty: 150, unit: "g" },
  //         { key: "onion", qty: 80, unit: "g" },
  //         { key: "oil", qty: 0.5, unit: "tbsp" },
  //         { key: "spices_mix", qty: 6, unit: "g" }
  //       ],
  //       steps: [
  //         "Heat oil and sauté onion + capsicum.",
  //         "Add chicken pieces and cook until done.",
  //         "Add spices and toss 1 minute."
  //       ],
  //       tags: ["nonVeg", "dinner", "highProtein", "quick", "lowCal"]
  //     },
  //     {
  //       name: "Chicken + Rice (Small Rice)",
  //       kcal: 520,
  //       protein: 48,
  //       time: 25,
  //       ingredients: [
  //         { key: "chicken_breast", qty: 200, unit: "g" },
  //         { key: "rice_raw", qty: 15, unit: "g" },
  //         { key: "onion", qty: 60, unit: "g" },
  //         { key: "tomato", qty: 150, unit: "g" },
  //         { key: "oil", qty: 0.5, unit: "tbsp" },
  //         { key: "spices_mix", qty: 6, unit: "g" }
  //       ],
  //       steps: [
  //         "Cook small rice portion and keep aside.",
  //         "Cook chicken with onion-tomato masala.",
  //         "Serve chicken with small rice portion."
  //       ],
  //       tags: ["nonVeg", "dinner", "highProtein", "mealPrep"]
  //     },
  //     {
  //       name: "Fish Curry + Salad (Optional)",
  //       kcal: 380,
  //       protein: 40,
  //       time: 25,
  //       ingredients: [
  //         { key: "fish", qty: 180, unit: "g" },
  //         { key: "onion", qty: 60, unit: "g" },
  //         { key: "tomato", qty: 150, unit: "g" },
  //         { key: "oil", qty: 0.5, unit: "tbsp" },
  //         { key: "spices_mix", qty: 6, unit: "g" },
  //         { key: "cucumber", qty: 150, unit: "g" },
  //         { key: "lemon", qty: 20, unit: "g" }
  //       ],
  //       steps: [
  //         "Cook onion-tomato masala with spices.",
  //         "Add fish and cook until done.",
  //         "Serve with salad."
  //       ],
  //       tags: ["nonVeg", "dinner", "highProtein", "lowCal"]
  //     }
  //   ]
  // }
  nonveg: {
  Breakfast: [
    {
      name: "Chicken Omelette Bowl",
      kcal: 420,
      protein: 45,
      time: 15,
      ingredients: [
        { key: "eggs", qty: 3, unit: "pc" },
        { key: "chicken_breast", qty: 120, unit: "g" },
        { key: "onion", qty: 60, unit: "g" },
        { key: "tomato", qty: 80, unit: "g" },
        { key: "oil", qty: 0.5, unit: "tbsp" },
        { key: "spices_mix", qty: 6, unit: "g" }
      ],
      steps: [
        "Cook chicken with salt and spices until done (or use pre-cooked chicken).",
        "Beat eggs with salt and spices.",
        "Sauté onion + tomato in oil for 1 minute.",
        "Add chicken, then pour egg mix and cook until set."
      ],
      tags: ["nonVeg", "breakfast", "highProtein", "quick", "mealPrep"]
    },

    {
      name: "Sprouts Salad + Paneer",
      kcal: 520,
      protein: 35,
      time: 10,
      ingredients: [
        { key: "mixed_sprouts", qty: 150, unit: "g" },
        { key: "paneer", qty: 100, unit: "g" },
        { key: "onion", qty: 50, unit: "g" },
        { key: "tomato", qty: 80, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" },
        { key: "coriander", qty: 5, unit: "g" },
        { key: "black_salt", qty: 2, unit: "g" }
      ],
      steps: [
        "Add sprouts, chopped onion, and tomato to a bowl.",
        "Add paneer cubes.",
        "Add lemon juice, black salt, and coriander.",
        "Mix well and serve."
      ],
      tags: ["nonVeg", "breakfast", "highProtein", "noCook", "quick"]
    },

    {
      name: "Soya Chunks Salad",
      kcal: 320,
      protein: 28,
      time: 15,
      ingredients: [
        { key: "soya_chunks", qty: 50, unit: "g" },
        { key: "onion", qty: 50, unit: "g" },
        { key: "tomato", qty: 80, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" },
        { key: "coriander", qty: 5, unit: "g" },
        { key: "black_salt", qty: 2, unit: "g" }
      ],
      steps: [
        "Soak soya chunks in hot water for 10 minutes.",
        "Squeeze out water completely and cool them down.",
        "Mix with onion, tomato, lemon juice, salt, and coriander.",
        "Serve immediately or refrigerate for meal prep."
      ],
      tags: ["nonVeg", "breakfast", "highProtein", "mealPrep", "quick"]
    },

    {
      name: "Chicken Sandwich (Light)",
      kcal: 420,
      protein: 38,
      time: 10,
      ingredients: [
        { key: "bread", qty: 50, unit: "g" },
        { key: "chicken_breast", qty: 140, unit: "g" },
        { key: "curd_plain", qty: 60, unit: "g" },
        { key: "onion", qty: 40, unit: "g" },
        { key: "black_salt", qty: 2, unit: "g" },
        { key: "pepper", qty: 1, unit: "g" }
      ],
      steps: [
        "Mix shredded chicken with curd + salt + pepper.",
        "Spread between bread slices.",
        "Serve."
      ],
      tags: ["nonVeg", "breakfast", "highProtein", "noCook", "quick"]
    }
  ],

  Lunch: [
    {
      name: "Chicken Curry + Rice (Small Rice)",
      kcal: 560,
      protein: 45,
      time: 35,
      ingredients: [
        { key: "chicken_breast", qty: 200, unit: "g" },
        { key: "rice_raw", qty: 25, unit: "g" },
        { key: "onion", qty: 80, unit: "g" },
        { key: "tomato", qty: 180, unit: "g" },
        { key: "oil", qty: 0.5, unit: "tbsp" },
        { key: "ginger_garlic_paste", qty: 10, unit: "g" },
        { key: "spices_mix", qty: 7, unit: "g" }
      ],
      steps: [
        "Cook rice and keep aside.",
        "Heat oil, sauté onion + ginger-garlic paste.",
        "Add tomato + spices and cook into masala.",
        "Add chicken and cook until done.",
        "Serve with small rice portion."
      ],
      tags: ["nonVeg", "lunch", "highProtein", "mealPrep"]
    },

    {
      name: "Paneer Salad Bowl",
      kcal: 520,
      protein: 33,
      time: 10,
      ingredients: [
        { key: "paneer", qty: 150, unit: "g" },
        { key: "cucumber", qty: 150, unit: "g" },
        { key: "tomato", qty: 120, unit: "g" },
        { key: "onion", qty: 50, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" },
        { key: "black_salt", qty: 2, unit: "g" },
        { key: "pepper", qty: 1, unit: "g" }
      ],
      steps: [
        "Chop cucumber, tomato, and onion.",
        "Add paneer cubes to a bowl.",
        "Add lemon juice, black salt, and pepper.",
        "Mix and serve."
      ],
      tags: ["nonVeg", "lunch", "highProtein", "noCook", "quick", "lowCal"]
    },

    {
      name: "Paneer Bhurji + Roti",
      kcal: 680,
      protein: 40,
      time: 25,
      ingredients: [
        { key: "paneer", qty: 180, unit: "g" },
        { key: "roti", qty: 2, unit: "pc" },
        { key: "onion", qty: 80, unit: "g" },
        { key: "tomato", qty: 150, unit: "g" },
        { key: "oil", qty: 0.5, unit: "tbsp" },
        { key: "spices_mix", qty: 6, unit: "g" }
      ],
      steps: [
        "Heat oil in a pan and sauté onion until light golden.",
        "Add tomato + spices and cook until soft.",
        "Add crumbled paneer and cook for 5–7 minutes.",
        "Serve hot with rotis."
      ],
      tags: ["nonVeg", "lunch", "highProtein", "quick"]
    },

    {
      name: "Chicken + Curd Bowl",
      kcal: 460,
      protein: 55,
      time: 10,
      ingredients: [
        { key: "chicken_breast", qty: 220, unit: "g" },
        { key: "curd_plain", qty: 200, unit: "g" },
        { key: "cucumber", qty: 150, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" },
        { key: "pepper", qty: 1, unit: "g" }
      ],
      steps: [
        "Add curd to a bowl.",
        "Add cooked chicken and cucumber.",
        "Season with lemon + pepper and mix."
      ],
      tags: ["nonVeg", "lunch", "highProtein", "quick", "mealPrep"]
    }
  ],

  Dinner: [
    {
      name: "Chicken Curry + Salad",
      kcal: 430,
      protein: 50,
      time: 30,
      ingredients: [
        { key: "chicken_breast", qty: 200, unit: "g" },
        { key: "onion", qty: 80, unit: "g" },
        { key: "tomato", qty: 180, unit: "g" },
        { key: "oil", qty: 0.5, unit: "tbsp" },
        { key: "ginger_garlic_paste", qty: 10, unit: "g" },
        { key: "spices_mix", qty: 7, unit: "g" },
        { key: "cucumber", qty: 200, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" }
      ],
      steps: [
        "Cook chicken curry using onion-tomato masala.",
        "Serve with cucumber salad + lemon."
      ],
      tags: ["nonVeg", "dinner", "highProtein", "lowCal", "mealPrep"]
    },

    {
      name: "Paneer Stir Fry + Salad",
      kcal: 520,
      protein: 35,
      time: 20,
      ingredients: [
        { key: "paneer", qty: 150, unit: "g" },
        { key: "capsicum", qty: 120, unit: "g" },
        { key: "onion", qty: 60, unit: "g" },
        { key: "tomato", qty: 100, unit: "g" },
        { key: "oil", qty: 0.5, unit: "tbsp" },
        { key: "spices_mix", qty: 5, unit: "g" },
        { key: "cucumber", qty: 150, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" }
      ],
      steps: [
        "Heat oil in a pan and sauté onion.",
        "Add capsicum and cook 3–4 minutes.",
        "Add tomato + spices and cook 2 minutes.",
        "Add paneer cubes and toss for 3–4 minutes.",
        "Serve with cucumber salad + lemon."
      ],
      tags: ["nonVeg", "dinner", "highProtein", "lowCal", "quick"]
    },

    {
      name: "Soya Chunk Curry + Rice (Small Rice)",
      kcal: 430,
      protein: 34,
      time: 30,
      ingredients: [
        { key: "soya_chunks", qty: 60, unit: "g" },
        { key: "rice_raw", qty: 15, unit: "g" },
        { key: "onion", qty: 70, unit: "g" },
        { key: "tomato", qty: 150, unit: "g" },
        { key: "oil", qty: 0.5, unit: "tbsp" },
        { key: "ginger_garlic_paste", qty: 10, unit: "g" },
        { key: "spices_mix", qty: 6, unit: "g" },
        { key: "cucumber", qty: 150, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" }
      ],
      steps: [
        "Cook rice and keep aside.",
        "Soak soya chunks in hot water for 10 minutes, then squeeze out water.",
        "Heat oil, sauté onion + ginger-garlic paste.",
        "Add tomato + spices and cook into thick masala.",
        "Add soya chunks and simmer 6–8 minutes.",
        "Serve soya curry with a small portion of rice + cucumber salad + lemon."
      ],
      tags: ["nonVeg", "dinner", "highProtein", "mealPrep", "lowCal"]
    },

    {
      name: "Fish Curry + Salad (Optional)",
      kcal: 380,
      protein: 40,
      time: 25,
      ingredients: [
        { key: "fish", qty: 180, unit: "g" },
        { key: "onion", qty: 60, unit: "g" },
        { key: "tomato", qty: 150, unit: "g" },
        { key: "oil", qty: 0.5, unit: "tbsp" },
        { key: "spices_mix", qty: 6, unit: "g" },
        { key: "cucumber", qty: 150, unit: "g" },
        { key: "lemon", qty: 20, unit: "g" }
      ],
      steps: [
        "Cook onion-tomato masala with spices.",
        "Add fish and cook until done.",
        "Serve with salad."
      ],
      tags: ["nonVeg", "dinner", "highProtein", "lowCal"]
    }
  ]
}

};
