
export interface Product {
    id: number;
    name: string;
    category: string;
    type: 'Men' | 'Women' | 'Unisex' | 'Gear';
    price: string;
    image: string;
    label?: string;
}

export const products: Product[] = [
    // Men's Running
    {
        id: 1,
        name: "Velocity Air Sprint",
        category: "Running",
        type: "Men",
        price: "$160",
        image: "/images/products/velocity_air_sprint_1768926452423.webp",
        label: "Best Seller"
    },
    {
        id: 2,
        name: "Zoom X Vaporfly",
        category: "Running",
        type: "Men",
        price: "$250",
        image: "/images/products/zoom_x_vaporfly_1768926471040.webp"
    },
    {
        id: 3,
        name: "Pegasus Turbo Next Nature",
        category: "Running",
        type: "Men",
        price: "$150",
        image: "/images/products/pegasus_turbo_1768926496142.webp"
    },
    {
        id: 4,
        name: "React Infinity Run",
        category: "Running",
        type: "Men",
        price: "$160",
        image: "/images/products/react_infinity_1768926518304.webp"
    },
    {
        id: 5,
        name: "Invincible Run 3",
        category: "Running",
        type: "Men",
        price: "$180",
        image: "/images/products/invincible_run_3_1768926551352.webp"
    },

    // Women's Running
    {
        id: 6,
        name: "Velocity Glide Women",
        category: "Running",
        type: "Women",
        price: "$145",
        image: "/images/products/velocity_glide_women_1768926576721.webp",
        label: "New"
    },
    {
        id: 7,
        name: "Air Zoom Pegasus 40",
        category: "Running",
        type: "Women",
        price: "$130",
        image: "/images/products/pegasus_40_women_1768926595065.webp"
    },
    {
        id: 8,
        name: "Vaporfly 3",
        category: "Running",
        type: "Women",
        price: "$250",
        image: "/images/products/vaporfly_3_women_1768926612647.webp"
    },
    {
        id: 9,
        name: "Streakfly",
        category: "Running",
        type: "Women",
        price: "$160",
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },

    // Basketball
    {
        id: 10,
        name: "Air Jordan XXXVIII",
        category: "Basketball",
        type: "Men",
        price: "$200",
        image: "/images/products/air_jordan_xxxviii_1768926664041.webp",
        label: "Trending"
    },
    {
        id: 11,
        name: "LeBron XXI",
        category: "Basketball",
        type: "Men",
        price: "$200",
        image: "/images/products/lebron_xxi_1768926681433.webp"
    },
    {
        id: 12,
        name: "G.T. Cut 3",
        category: "Basketball",
        type: "Men",
        price: "$190",
        image: "/images/products/gt_cut_3_1768926705198.webp"
    },
    {
        id: 13,
        name: "Giannis Immortality",
        category: "Basketball",
        type: "Unisex",
        price: "$85",
        image: "/images/products/giannis_immortality_1768926722149.webp"
    },

    // Training & Lifestyle
    {
        id: 14,
        name: "Metcon 9",
        category: "Training",
        type: "Men",
        price: "$150",
        image: "/images/products/metcon_9_1768926763954.webp"
    },
    {
        id: 15,
        name: "Free Metcon 5",
        category: "Training",
        type: "Women",
        price: "$120",
        image: "/images/products/free_metcon_5_1768926785299.webp"
    },
    {
        id: 16,
        name: "Dunk Low Retro",
        category: "Lifestyle",
        type: "Men",
        price: "$115",
        image: "/images/products/dunk_low_retro_1768926807026.webp",
        label: "Limited"
    },
    {
        id: 17,
        name: "Air Force 1 '07",
        category: "Lifestyle",
        type: "Unisex",
        price: "$115",
        image: "/images/products/air_force_1_1768926829227.webp"
    },
    {
        id: 18,
        name: "Blazer Mid '77",
        category: "Lifestyle",
        type: "Unisex",
        price: "$105",
        image: "/images/products/blazer_mid_77_1768926851010.webp"
    },
    {
        id: 19,
        name: "Air Max 90",
        category: "Lifestyle",
        type: "Men",
        price: "$130",
        image: "/images/products/air_max_90_1768926871691.webp"
    },

    // Gear & Accessories
    {
        id: 20,
        name: "Elite Pro Backpack",
        category: "Gear",
        type: "Gear",
        price: "$85",
        image: "/images/products/elite_pro_backpack_1768926919615.webp"
    },
    {
        id: 21,
        name: "Velocity Crew Socks",
        category: "Gear",
        type: "Gear",
        price: "$18",
        image: "/images/products/velocity_crew_socks_1768926945184.webp"
    },
    {
        id: 22,
        name: "Hydration Bottle 32oz",
        category: "Gear",
        type: "Gear",
        price: "$25",
        image: "/images/products/hydration_bottle_1768926961809.webp"
    },
    {
        id: 23,
        name: "Training Gloves",
        category: "Gear",
        type: "Gear",
        price: "$35",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 24,
        name: "Yoga Mat Pro",
        category: "Gear",
        type: "Gear",
        price: "$60",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },

    // New Additions
    // Running
    {
        id: 25,
        name: "Zoom Fly 5",
        category: "Running",
        type: "Men",
        price: "$160",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 26,
        name: "React Infinity 3",
        category: "Running",
        type: "Women",
        price: "$165",
        image: "https://images.unsplash.com/photo-1556906781-9a412961d289?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    // Basketball
    {
        id: 27,
        name: "KD16",
        category: "Basketball",
        type: "Men",
        price: "$160",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 28,
        name: "Zoom Freak 5",
        category: "Basketball",
        type: "Men",
        price: "$140",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    // Training
    {
        id: 29,
        name: "SuperRep Go 3",
        category: "Training",
        type: "Men",
        price: "$100",
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 30,
        name: "Versair",
        category: "Training",
        type: "Women",
        price: "$130",
        image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    // Lifestyle
    {
        id: 31,
        name: "Air Max 1",
        category: "Lifestyle",
        type: "Men",
        price: "$140",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 32,
        name: "Cortez",
        category: "Lifestyle",
        type: "Women",
        price: "$90",
        image: "https://images.unsplash.com/photo-1549488344-c7059728b9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    // Gear
    {
        id: 33,
        name: "Training Duffel Bag",
        category: "Gear",
        type: "Gear",
        price: "$60",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 34,
        name: "Performance Headband",
        category: "Gear",
        type: "Gear",
        price: "$20",
        image: "https://images.unsplash.com/photo-1596727147705-54a9d002094c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];
