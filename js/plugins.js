// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"RS_InputDialog","status":true,"description":"This plugin allows you to display Text Edit Box on the screen. <RS_InputDialog>","parameters":{"textBox Width":"488","textBox Height":"36","variable ID":"3","debug":"false","Text Hint":"Please enter the value...","direction":"ltr","Max Length":"255","Style":"","CSS":"\"\"","Button Name":"","Ok":"OK","Cancel":"Cancel","Position":"center"}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"proSnapMinimap","status":true,"description":"Minimap","parameters":{"General":"","Background":"rgba(50,120,120,1)","PlayerColor":"rgba(255,240,200,1)","EventColor":"rgba(255,255,255,1)","Outline Color":"rgba(0,0,0,1)","Fog of War Blur":"8","Disable Outline":"false","Show Compas":"false","Location":"TOPLEFT","Impassable Color":"rgba(20,35,120,1)","Enable Automatic Drawing":"true","Enable Region Drawing":"true","Use Terrain Tag":"true","Region Colors":"","Region1":"rgba(0,0,0,1)","Region2":"rgba(50,120,120,1)","Region3":"rgba(100,150,150,1)","Region4":"rgba(150,200,200,1)","Region5":"rgba(200,220,220,1)","Icons":"","Item Shop":"176","Weapon Shop":"97","Armor Shop":"137","Magic Shop":"189","Inn":"8","Bar":"4","Church":"221","Dungeon":"5","Bank":"314"}},
{"name":"SRD_CharacterCreatorEX","status":true,"description":"Allows players to create their own custom characters.","parameters":{"Layers":"Body, Eyes, Eyebrows, Nose, Mouth, Rear Hair Part1, Front Hair Part2, Rear Hair Part2, Clothing, Accessory A, Glasses, Front Hair Part1, Accessory B","Order":"Body, Eyes, Eyebrows, Nose, Mouth, Clothing, Front Hair, Rear Hair, Accessory A, Accessory B, Glasses","Mandatory":"Body, Eyes, Eyebrows, Nose, Mouth","Mandatory Color":"#FFFF44","Print to Console":"false","== Visual Options ==":"","Use Fade Transition":"true","Use Piece Background":"true","Use Scene Background":"true","Background X Scroll":"1","Background Y Scroll":"0","Small Piece Cols":"3","Big Piece Cols":"1","== Dialogues ==":"","Leave Dialogue":"Are you sure you want\\n to save this character?","Mandatory Dialogue":"You need to have all the mandatory sections \\nfilled out before exiting.","== Size Options ==":"","Character Width":"48","Character Height":"48","SV Char Width":"64","SV Char Height":"64","Face Width":"144","Face Height":"144","== Localization ==":"","Yes Text":"Yes","No Text":"No","Color Mouse/Touch Input":"true"}},
{"name":"ARP_TitleCommandExit","status":true,"description":"v1.00 Adds an option in the title command window to close\r\ngame window.","parameters":{"Command Exit":"Quit","Show Exit":"true"}},
{"name":"SRD_MenuStatusCustomizer","status":true,"description":"Allows you to have more customization over the Actor Statuses that appear in the main part of the menu.","parameters":{"== Retain Mode ==":"","Retain Mode":"false","Retain Mode Width":"816","== Visual Options ==":"","Command Width":"240","Visible Rows":"4","== Status Window ==":"","Status Info Columns":"3","Status Info Rows":"3","Status Col Padding":"24","--------------------":"","Show Name":"true","Name Location":"row 1, column 1","Show Nickname":"false","Nickname Location":"row 0, column 0","Show Class":"true","Class Location":"row 2, column 1","Show Level":"true","Level Location":"row 3, column 1","Show Icons":"true","Icons Location":"row 1, column 3","Show HP Bar":"true","HP Bar Location":"row 1, column 2","Show MP Bar":"true","MP Bar Location":"row 2, column 2","Show TP Bar":"true","TP Bar Location":"row 3, column 2","Show EXP Bar":"true","EXP Bar Location":"row 3, column 3","EXP Bar Text":"To Next Level","EXP Bar Color 1":"#00ff00","EXP Bar Color 2":"#00ff00","Status 1 Eval":"\"ATTACK: \" + actor.atk","Status 1 Location":"row 3, column 3","Status 1 Codes?":"false","Status 2 Eval":"","Status 2 Location":"","Status 2 Codes?":"false","Status 3 Eval":"","Status 3 Location":"","Status 3 Codes?":"false","Status 4 Eval":"","Status 4 Location":"","Status 4 Codes?":"false","Status 5 Eval":"","Status 5 Location":"","Status 5 Codes?":"false","Status 6 Eval":"","Status 6 Location":"","Status 6 Codes?":"false","Status 7 Eval":"","Status 7 Location":"","Status 7 Codes?":"false","Status 8 Eval":"","Status 8 Location":"","Status 8 Codes?":"false","Status 9 Eval":"","Status 9 Location":"","Status 9 Codes?":"false","Status 10 Eval":"","Status 10 Location":"","Status 10 Codes?":"false"}},
{"name":"SRD_GoldWindowCustomizer","status":true,"description":"A Plugin that allows you to manipulate the information presented on the Gold Window.","parameters":{"Rows":"2","Columns":"1","X":"this._goldWindow.x","Y":"this._commandWindow.height","Width":"240 * this.infoCols()","Height":"this.fittingHeight(this.infoRows())","Font Size":"28","== Labels ==":"","Battle Label":"Battles","Map Label":"(Map)","D-Map Label":"(Map)","BGM Label":"(BGM)","No BGM Label":"None","Time Label":"(Time)","ON Label":"ON","OFF Label":"OFF","== Information ==":"","Information 1":"Text-center: Game Score:","Information 2":"Variable: 3","Information 3":"","Information 4":"","Information 5":"","Information 6":"","Information 7":"","Information 8":"","Information 9":"","Information 10":"","Information 11":"","Information 12":"","Information 13":"","Information 14":"","Information 15":"","Information 16":"","Information 17":"","Information 18":"","Information 19":"","Information 20":"","Information 21":"","Information 22":"","Information 23":"","Information 24":"","Information 25":"","Information 26":"","Information 27":"","Information 28":"","Information 29":"","Information 30":"","Information 31":"","Information 32":"","Information 33":"","Information 34":"","Information 35":"","Information 36":"","Information 37":"","Information 38":"","Information 39":"","Information 40":"","Information 41":"","Information 42":"","Information 43":"","Information 44":"","Information 45":"","Information 46":"","Information 47":"","Information 48":"","Information 49":"","Information 50":""}}
];
