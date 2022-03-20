({
    name: "Ultrasonic", // Category Name
    description: "Get distance from HC-SR04p",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="ultrasonic_read">
                    <field name="trig">26</field>
                    <field name="echo">32</field>
                </block>
            `
        }
    ]
});
