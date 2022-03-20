Blockly.defineBlocksWithJsonArray([
  {
    "type": "ultrasonic_read",
    "message0": "Ultrasonic trig pin: %1 echo pin: %2 read distance (cm)",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "trig",
        "options": [
          [
            "OUT3",
            "2"
          ],
          [
            "OUT4",
            "25"
          ],
          [
            "OUT5",
            "27"
          ],
          [
            "OUT9",
            "4"
          ],
          [
            "OUT10",
            "5"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "echo",
        "options": [
          [
            "IN1",
            "14"
          ],
          [
            "IN2",
            "26"
          ],
          [
            "IN6",
            "33"
          ],
          [
            "IN7",
            "32"
          ],
          [
            "IN8",
            "35"
          ] 
        ]
      }
    ],
    "output": "Number",
    "colour": "#004098",
    "tooltip": "Attach your Ultrasonic to Input, Output Pins",
    "helpUrl": "www.tektech.org"
  }
  ]);
  
