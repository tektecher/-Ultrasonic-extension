pins 
1- touch_1 = 14
2- touch_2 = 26
3- i/o1 = 2
4- i/o2 = 25
5- i/o3 = 27
6- i/o4 = 33
7- i/o5 = 32 
8- i/o6 = 35 
9- SDA = 4
10- SCL = 5

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
  