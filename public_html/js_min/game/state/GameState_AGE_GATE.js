(function(b,e){function f(){f.__superclass__.call(this,f.ID,arguments);this.setListenerStateMessage(GameState.MESSAGE_INIT,this.INIT);this.setListenerStateMessage(GameState.MESSAGE_UPDATE,this.UPDATE);this.setListenerStateMessage(GameState.MESSAGE_PAINT,this.PAINT);this.setListenerStateMessage(GameState.MESSAGE_EXIT,this.EXIT)}LowAPI.extendClass(f,GameState);f.ID=GameState.genID();var d=6000;f.prototype.INIT=function(){window.s_userAge=20;guiMgr_SetLayerActiveStateAll(false);guiMgr_ResetAllGUILayers();Input_Init();resetSound(0);guiMgr_ActivateGUILayer(GUI_LAYER.AGE_GATE,true);SetTextAreaString(GameData.k_gameAge_Gate,GameData.k_Age_Gate_Txt_age,""+window.s_userAge);StopSound(SOUND_MODE.MUSIC);if(d>0){playSound(SOUND_TYPE.SPLASH_MUSIC,false)}};f.prototype.UPDATE=function(){guiMgr_processInputAllGuiLayers();guiMgr_updateLayers();gui_UpdateGameLayerAnims(GameData.k_gameMenuMain)};f.prototype.PAINT=function(){s_ASpriteArray[DATA.SPRITE_DATA_LOADING_SPLASH].PaintFrame(g,0,0,0,0);guiMgr_PaintGUILayers()};f.prototype.EXIT=function(){guiMgr_ActivateGUILayer(GUI_LAYER.AGE_GATE,false)};_register_gui_message(GameData.k_gameAge_Gate,a);var c=0;function a(i,h){if(i==GUI_MESSAGE_INITIALIZE){gui_ResetAllLayerButtonsPressedState()}if(i==GUI_MESSAGE_UPDATE){guiMgr_PaintGUILayers();if(IsButtonPressed(GameData.k_gameAge_Gate,GameData.k_Age_Gate_Btn_age_up)){c++;if(c>10){window.s_userAge++}SetTextAreaString(GameData.k_gameAge_Gate,GameData.k_Age_Gate_Txt_age,""+window.s_userAge)}if(IsButtonPressed(GameData.k_gameAge_Gate,GameData.k_Age_Gate_Btn_age_down)){c++;if(c>10){if(window.s_userAge>1){window.s_userAge--}}SetTextAreaString(GameData.k_gameAge_Gate,GameData.k_Age_Gate_Txt_age,""+window.s_userAge)}}if(i==GUI_MESSAGE_AFTER_PAINT){}if(i==GUI_MESSAGE_INPUT_EVENT){switch(h){case GameData.k_Age_Gate_Btn_accept:playSound(SOUND_TYPE.SELECT_SFX,false);GameVars_SetRecordValue(RMS_RECORD_USER_AGE,window.s_userAge,true);GameVars_SaveAll();if(window.s_userAge<=16){GameState.scheduleSwitchState(GameState_DAILY_BONUS.ID,true,true)}else{GameState.scheduleSwitchState(GameState_FACEBOOK_WELCOME.ID,true,true)}break;case GameData.k_Age_Gate_Btn_age_up:if(c<10){window.s_userAge++}c=0;SetTextAreaString(GameData.k_gameAge_Gate,GameData.k_Age_Gate_Txt_age,""+window.s_userAge);break;case GameData.k_Age_Gate_Btn_age_down:if(c<10){if(window.s_userAge>1){window.s_userAge--}}c=0;SetTextAreaString(GameData.k_gameAge_Gate,GameData.k_Age_Gate_Txt_age,""+window.s_userAge);break;case GameData.k_Age_Gate_Btn_policy:window.location.href="https://www.gameloft.com/en/privacy-notice/";break;case GameData.k_Age_Gate_Btn_cookies:window.location.href="https://play.ludigames.com/cookie_policy/ ";break}}}LowAPI.extendObject(b,{GameState_AGE_GATE:f,},true)})(window);