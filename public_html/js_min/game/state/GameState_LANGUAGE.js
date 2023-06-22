(function(D,f){function A(){A.__superclass__.call(this,A.ID,arguments);this.setListenerStateMessage(GameState.MESSAGE_INIT,this.INIT);this.setListenerStateMessage(GameState.MESSAGE_UPDATE,this.UPDATE);this.setListenerStateMessage(GameState.MESSAGE_PAINT,this.PAINT);this.setListenerStateMessage(GameState.MESSAGE_EXIT,this.EXIT)}LowAPI.extendClass(A,GameState);A.ID=GameState.genID();A.prototype.INIT=function(){guiMgr_SetLayerActiveStateAll(false);guiMgr_ResetAllGUILayers();Input_Init();guiMgr_ActivateGUILayer(GUI_LAYER.LANGUAGE,true);StopSound(SOUND_MODE.MUSIC)};A.prototype.UPDATE=function(){guiMgr_processInputAllGuiLayers();guiMgr_updateLayers();gui_UpdateGameLayerAnims(GameData.k_gameOptions)};A.prototype.PAINT=function(){guiMgr_PaintGUILayers()};A.prototype.EXIT=function(){guiMgr_ActivateGUILayer(GUI_LAYER.LANGUAGE,false)};function n(){GameState.scheduleSwitchState(GameState_OPTIONS.ID,true,true);guiMgr_ActivateGUILayer(GUI_LAYER.LANGUAGE,false);playSound(SOUND_TYPE.BACK_SFX,false)}_register_gui_message(GameData.k_gameLanguage,o);function o(F,E){if(F==GUI_MESSAGE_INITIALIZE){v();gui_ResetAllLayerButtonsPressedState();guiMgr_SetLayerInputBlockState(guiMgr_GetGUILayerIndex(guiMgr_iCurrentLayerType),true);guiMgr_SetLayerPaintBlockState(guiMgr_GetGUILayerIndex(guiMgr_iCurrentLayerType),true);y()}if(F==GUI_MESSAGE_UPDATE){b()}if(F==GUI_MESSAGE_CLOSE){}if(F==GUI_MESSAGE_AFTER_PAINT){w(true)}if(F==GUI_MESSAGE_INPUT_EVENT){switch(E){case GameData.k_Language_btnExit:n();break}}}function j(E){playSound(SOUND_TYPE.SELECT_SFX,false);s_systemLang=E;GameVars_SetRecordValue(RMS_RECORD_LANGUAGE_SELECTION,s_systemLang);GameVars_SaveAll();msgBox_AddMsgBox(MSGBOX_TYPE.LOADING,getString(TEXT.MAIN_IAP_GETTING_FEED),setTimeout(function(){location.reload(false)},1000))}var h={};h.BTN_LANG=0;h.SIZE=h.BTN_LANG+1;var c=null;var a={};TEXT.MAIN_LANGUAGE_EN;TEXT.MAIN_LANGUAGE_FR;TEXT.MAIN_LANGUAGE_DE;TEXT.MAIN_LANGUAGE_IT;TEXT.MAIN_LANGUAGE_ES;TEXT.MAIN_LANGUAGE_RU;TEXT.MAIN_LANGUAGE_BR;TEXT.MAIN_LANGUAGE_TR;TEXT.MAIN_LANGUAGE_JP;TEXT.MAIN_LANGUAGE_KR;TEXT.MAIN_LANGUAGE_TH;TEXT.MAIN_LANGUAGE_VI;TEXT.MAIN_LANGUAGE_SC;TEXT.MAIN_LANGUAGE_TC;TEXT.MAIN_LANGUAGE_ID;var e=[TEXT.MAIN_LANGUAGE_EN,TEXT.MAIN_LANGUAGE_FR,TEXT.MAIN_LANGUAGE_DE,TEXT.MAIN_LANGUAGE_IT,TEXT.MAIN_LANGUAGE_ES,TEXT.MAIN_LANGUAGE_RU,TEXT.MAIN_LANGUAGE_BR,TEXT.MAIN_LANGUAGE_TR,TEXT.MAIN_LANGUAGE_JP,TEXT.MAIN_LANGUAGE_KR,TEXT.MAIN_LANGUAGE_TH,TEXT.MAIN_LANGUAGE_VI,TEXT.MAIN_LANGUAGE_SC,TEXT.MAIN_LANGUAGE_TC,TEXT.MAIN_LANGUAGE_ID];function z(){for(var E=0;E<c.length;E++){if(s_iCurrentLanguage==c[E]){return E}}return -1}var B=new cScrollMenu(0,0,0,0,0,0,0);var p=[0,0,0,0];var k;var i;var t=-1;var x=0;function C(E){ResetLayerData(GameData.k_gameLanguageScrollItem);ResizeLayerNumElems(GameData.k_gameLanguageScrollItem,GetNumLayerElements(GameData.k_gameLanguageScrollItem)+h.SIZE*(E-1));var H=0;var G=0;for(var F=0;F<E;++F){if(F!=0){CloneLayerElemData(GameData.k_gameLanguageScrollItem,h.BTN_LANG,F*h.SIZE+h.BTN_LANG);H=GetParamValue(GameData.k_gameLanguageScrollItem,h.BTN_LANG,GtsData.GUI_POSX);G=GetParamValue(GameData.k_gameLanguageScrollItem,h.BTN_LANG,GtsData.GUI_POSY);SetParamValue(GameData.k_gameLanguageScrollItem,F*h.SIZE+h.BTN_LANG,GtsData.GUI_POSX,H+B.GetElementPosX(F));SetParamValue(GameData.k_gameLanguageScrollItem,F*h.SIZE+h.BTN_LANG,GtsData.GUI_POSY,G+B.GetElementPosY(F))}m(F);Dbg("Generated element "+F)}}function m(E){SetButtonText(GameData.k_gameLanguageScrollItem,h.BTN_LANG+(E*h.SIZE),getString(e[E]))}function y(){Dbg("SCROLL INIT!");GetRectAreaRect(s_gui_outRect,GameData.k_gameLanguage,GameData.k_Language_rectScroll);SetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_HEIGHT,m_gameData[GameData.k_gameLanguage][GameData.k_Language_ScrollData][GtsData.GUI_SCROLLDATA_HEIGHT]+s_ratio);var G=s_gui_outRect[2]-s_gui_outRect[0];var E=s_gui_outRect[3]-s_gui_outRect[1];B.Reset();B.SetRowLength(1);B.SetDirection(cScrollMenu.SCROLL_DIRECTION_VERTICAL);B.SetWindowWidth(GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_WIDTH));B.SetWindowHeight(GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_HEIGHT));var F=c.length;B.SetElementCounter(F);B.SetElemWidth(G+1);B.SetElemHeight(E+1);B.SetElemSpacingX(G);B.SetElemSpacingY(GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_ELEMVERTSPACING)+E);C(F);B.SetLockStateX(true);B.SetLockStateY(false);k=s_gui_outRect[0];i=s_gui_outRect[1];p[0]=GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_POSX)+GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_POSX);p[1]=GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_POSY)+GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_POSY);p[2]=GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_WIDTH);p[3]=GetParamValue(GameData.k_gameLanguage,GameData.k_Language_ScrollData,GtsData.GUI_SCROLLDATA_HEIGHT);B.Reset();t=-1;x=0}function b(){B.Update(s_game_frameDT);var G=Input_GetPointerPosX_SYNC();var F=Input_GetPointerPosY_SYNC();if(isPointInRectWH(G,F,p)){if(Input_IsPointerDragged_SYNC()){B.ApplyDisplacement(Input_GetDragOffsetX_SYNC(),Input_GetDragOffsetY_SYNC());if(u(Input_GetDraggedPosY_SYNC()-Input_GetPressedPosY_SYNC())>SCROLL_ALLOWINPUTDRAG_THRESHOLD){s_bAllowInputInScroll=false}}if(Input_IsPointerPressed_SYNC()){s_bAllowInputInScroll=true}if(!s_bAllowInputInScroll){l(0,10000,10000,INPUT_FLAG_RELEASED)}else{if(Input_CheckState_SYNC(INPUT_FLAG_DRAGGED|INPUT_FLAG_PRESSED)){Dbg("SCROLL UPDATE PRESS!");var E=B.GetElementAt(Input_GetPointerPosX_SYNC()-k,Input_GetPointerPosY_SYNC()-i);if((E>=0)){Dbg("SCROLL UPDATE ELEMENT!");t=E;l(E,0,0,INPUT_FLAG_RELEASED)}}if(Input_CheckState(INPUT_FLAG_RELEASED)){B.SetVelocity(Input_GetDragOffsetX_SYNC(),Input_GetDragOffsetY_SYNC(),4);var E=B.GetElementAt(Input_GetPointerPosX_SYNC()-k,Input_GetPointerPosY_SYNC()-i);if((E>=0)){x=E;l(E,0,0,INPUT_FLAG_RELEASED);B.ResetVelocity();t=-1}}}}}function l(G,E,H,F){scroll_doElementClick(B,GameData.k_gameLanguageScrollItem,G,E,H,F)}function d(){var E=B.GetScrollOffsetX();var F=B.GetScrollOffsetY();PaintAllVisibleItems(GameData.k_gameLanguageScrollItem,E,F)}function w(F){gui_SetClip(p[0],p[1],p[2],p[3]);var E=0;var G=0;d();gui_RestoreClip();B.Paint(g,k,i);if(F){B.PaintScrollBar(g,SCROLLBAR_BACK,SCROLLBAR_FRONT,(p[0]+p[2]-11),p[1],7,p[3],p[2],p[3])}}var q=false;function s(F,E){if(F==-1){return}switch(E%h.SIZE){case GameData.k_LanguageScrollItem_btnScroll:j(F);break}}function v(){if(c!=null){return}var G=0;for(var E=0;E<23;E++){if(isLanguageSupported(E)){G++}}c=[G];var F=0;for(var E=0;E<23;E++){if(isLanguageSupported(E)){c[F]=E;F++}}}function r(){return t}function u(E){if(E<0){return -E}else{return E}}LowAPI.extendObject(D,{GameState_LANGUAGE:A,Language_ProcessItemClick:s,get_languageScroll_PressedButton:r,},true)})(window);