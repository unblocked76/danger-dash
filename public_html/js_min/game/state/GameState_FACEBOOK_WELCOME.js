(function(ae,z){var bd=0;var aE=false;var ay=null;var M=false;var N=s_iCurrentLanguage;var T=0;var aK=1;var s=T;var aS=0;var q=1;var aB=2;var a3=3;var Y=4;var aH=5;var at=6;var d=7;var L=8;var ad=9;var az=10;var ao=10;var aN=11;var H=12;var u=13;var W=14;var aP=aS;var aO={};aO.STATE0=0;aO.FRAME1=1;aO.WLOGIN=2;aO.WDATA=3;aO.COMPLETED=4;window.OSS_FB_ITEM_STATE={};OSS_FB_ITEM_STATE.NOT_CONNECTED=0;OSS_FB_ITEM_STATE.CONNECTING=1;OSS_FB_ITEM_STATE.FRIENDS_LOADING=2;OSS_FB_ITEM_STATE.NOT_A_USER=3;OSS_FB_ITEM_STATE.NAME_LOADING=4;OSS_FB_ITEM_STATE.PHOTO_LOADING=5;OSS_FB_ITEM_STATE.READY=6;var V=aO.STATE0;var I=50;var au=1000*30;var J=0;var v=0;window.FBM_STATE_END=0;var al=1;var aG=2;var bg=3;var Q=3;var h=4;var aI=5;var ar=6;var aA=7;var ag=8;var i=9;var aX=10;var aj=11;var P=12;var a7=13;var an=14;var o=15;var Z=16;var X=17;window.fbm_state=FBM_STATE_END;var aL=0;var bc=1;var aV=2;var ah=3;var bf=4;var a1=5;var c;var a=0;var ac=0;var p=false;window.FBM_POST_STATE_IDLE=-1;window.FBM_POST_STATE_INIT=0;window.FBM_POST_STATE_LOAD_ALL_FRIENDS=1;window.FBM_POST_STATE_INIT_DEPENDENCIES=2;window.FBM_POST_STATE_IMPORT=3;window.FBM_POST_STATE_UPLOAD=4;window.FBM_POST_STATE_RETRY=5;window.FBM_POST_STATE_FAILED=6;window.fbm_post_state=FBM_POST_STATE_IDLE;var a2=-2;var aq=-1;var bb;function be(){be.__superclass__.call(this,be.ID,arguments);this.setListenerStateMessage(GameState.MESSAGE_INIT,this.INIT);this.setListenerStateMessage(GameState.MESSAGE_UPDATE,this.UPDATE);this.setListenerStateMessage(GameState.MESSAGE_PAINT,this.PAINT);this.setListenerStateMessage(GameState.MESSAGE_EXIT,this.EXIT)}LowAPI.extendClass(be,GameState);be.ID=GameState.genID();be.prototype.INIT=function(){setCurrentLanguage(s_systemLang);ai(70,68);if(!x()){s=T;guiMgr_ActivateGUILayer(GUI_LAYER.FACEBOOK_CONNECT,true);aP=aS}else{aP=az}if(s_systemSound){setSoundModeEnabled(SOUND_MODE.MUSIC,true);setSoundModeEnabled(SOUND_MODE.SFX,true)}else{setSoundModeEnabled(SOUND_MODE.MUSIC,false);setSoundModeEnabled(SOUND_MODE.SFX,false)}GameState.scheduleSwitchState(GameState_DAILY_BONUS.ID,true,true)};be.prototype.UPDATE=function(){F();guiMgr_processInputAllGuiLayers();guiMgr_updateLayers()};be.prototype.PAINT=function(){s_ASpriteArray[DATA.SPRITE_DATA_LOADING_SPLASH].PaintFrame(g,0,0,0,0);guiMgr_PaintGUILayers()};be.prototype.EXIT=function(){guiMgr_ActivateGUILayer(GUI_LAYER.FACEBOOK_CONNECT,false)};_register_gui_message(GameData.k_gameFacebook_connect,aQ);function aQ(bj,bi){if(bj==GUI_MESSAGE_INITIALIZE){gui_ResetAllLayerButtonsPressedState();guiMgr_SetLayerInputBlockState(guiMgr_GetGUILayerIndex(guiMgr_iCurrentLayerType),true);var bh=s_arrayTweaks[isPremium()?ITweaks.PREMIUM_COINS_FACEBOOK_FIRST_CONNECT:ITweaks.COINS_FACEBOOK_FIRST_CONNECT][0];SetTextAreaString(GameData.k_gameFacebook_connect,GameData.k_Facebook_connect_Txt_coins,""+text_GetFormatNumber(bh));gui_alignXTextAndIcon(GameData.k_gameFacebook_connect,GameData.k_Facebook_connect_Txt_coins,GameData.k_Facebook_connect_Gfx_coins,GLLibConfiguration.screenWidth/2,5);SetTextAreaVisibility(GameData.k_gameFacebook_connect,GameData.k_Facebook_connect_Txt_coins,false);SetGraphItemVisibility(GameData.k_gameFacebook_connect,GameData.k_Facebook_connect_Gfx_coins,false);SetTextAreaVisibility(GameData.k_gameFacebook_connect,GameData.k_Facebook_connect_Txt_for_free,false);SetTextAreaVisibility(GameData.k_gameFacebook_connect,GameData.k_Facebook_connect_Txt_get,false)}if(bj==GUI_MESSAGE_UPDATE){}if(bj==GUI_MESSAGE_BEFORE_PAINT){AlphaRect_SetColor(1879048192);AlphaRect_Draw(g,0,0,GLLibConfiguration.screenWidth,GLLibConfiguration.screenHeight)}if(bj==GUI_MESSAGE_INPUT_EVENT){switch(bi){case GameData.k_Facebook_connect_Btn_facebook:playSound(SOUND_TYPE.SELECT_SFX,false);aZ(true);break;case GameData.k_Facebook_connect_Btn_later:playSound(SOUND_TYPE.SELECT_SFX,false);GameState.scheduleSwitchState(GameState_DAILY_BONUS.ID,true,true);break}}}function F(){switch(aP){case az:aZ(false);break;case q:j();if(fbm_state==FBM_STATE_END){m()}break;case d:bd++;if(aE||bd>500){ax();aP=aH;if("iap".equals(ay)){if(IapMgr_IsEnabled()){IapMgr_Start(STATE_MENUMAIN,false,false)}else{aW()}}else{if("upgrades".equals(ay)){switchStateThroughLoading(STATE_UPGRADES,LOADING_DISPLAY_TYPE.SMALL,getString(TEXT.MAIN_LOADING))}else{if("characters".equals(ay)){switchStateThroughLoading(STATE_CHARACTERS,LOADING_DISPLAY_TYPE.SMALL,getString(TEXT.MAIN_LOADING))}else{aW()}}}}break}}function aW(){GameState.scheduleSwitchState(GameState_DAILY_BONUS.ID,true,true);aP=aH}function m(){aW()}function aZ(bh){guiMgr_ActivateGUILayer(GUI_LAYER.FACEBOOK_CONNECT,false);aa();if(bh){aw()}else{aM()}aP=q}function a0(bi,bj,bh){SocialNetwork.setApplication(bi,bj,bh)}function x(){return SocialNetwork.isLoggedIn()}function ai(bh,bi){SocialNetwork.setPhoto(bh,bi)}function S(){if(V!=aO.STATE0){return}SocialNetwork.Login();V=aO.FRAME1}function a4(){if(V==aO.COMPLETED){SocialNetwork.Logout();V=aO.STATE0;fbm_post_state=FBM_POST_STATE_IDLE;p=false}}function am(){if(V==aO.COMPLETED){return 1}else{if(V==aO.STATE0){return -1}else{return 0}}}function y(){switch(V){case aO.FRAME1:v=0;V=aO.WLOGIN;J=System.currentTimeMillis();break;case aO.WLOGIN:if(SocialNetwork.isLoggedIn()){SocialNetwork.LoadData();J=System.currentTimeMillis();V=aO.WDATA}else{if(System.currentTimeMillis()-J>au){V=aO.STATE0}}break;case aO.WDATA:if(t()){V=aO.COMPLETED}else{if(System.currentTimeMillis()-J>au){V=aO.STATE0}}break}}function t(){if(!SocialNetwork.isLoggedIn()){Dbg("Facebook oss: oss_areMyCred not logged");return false}if(!SocialNetwork.isDataReady()){Dbg("Facebook oss: oss_areMyCred not data ready");return false}var bh=SocialNetwork.getUser();if(bh==null){Dbg("Facebook oss: oss_areMyCred user null");return false}var bi=bh.getId();var bj=SocialNetwork.getPassword();if(bi==""||bj==""){Dbg("Facebook oss: oss_areMyCred user id or passw not ready: ("+bi+","+bj+")");return false}return true}function r(){return ap()}function ap(){if(V!=aO.COMPLETED){return null}var bh=SocialNetwork.getUser();return bh.getId()}function a8(bn){var bl=am();if(bl<0){return OSS_FB_ITEM_STATE.NOT_CONNECTED}else{if(bl==0){return OSS_FB_ITEM_STATE.CONNECTING}}var bh=O(bn);var bj=SocialNetwork.getUser();if(bh==bj.getId()){return OSS_FB_ITEM_STATE.READY}var bp=SocialNetwork.getFriends();if(bp==null){return OSS_FB_ITEM_STATE.FRIENDS_LOADING}for(var bk=0;bk<bp.length;bk++){bj=bp[bk];var bm=bj.getId();if(bm==null||""==bm){return OSS_FB_ITEM_STATE.FRIENDS_LOADING}if(bh==bm){return OSS_FB_ITEM_STATE.READY}}var bo=SocialNetwork.getWorldPlayer();if(bo!=null){for(var bi=0;bi<bo.length;bi++){bj=bo[bi];if(bh==bj.getId()){return OSS_FB_ITEM_STATE.READY}}}return OSS_FB_ITEM_STATE.NOT_A_USER}function aJ(bj){var bk=a8(bj);if(bk!=OSS_FB_ITEM_STATE.READY){return bk}var bi=k(bj);try{var bh=bi.getImage();bh.getWidth()}catch(bl){return OSS_FB_ITEM_STATE.PHOTO_LOADING}return OSS_FB_ITEM_STATE.READY}function R(){if(am()<=0){return""}var bh=SocialNetwork.getUser();if(bh==null){return""}var bi=bh.getName();if(bi==null){return""}return bi}function E(bj){var bi=k(bj);if(bi==null){return null}try{var bh=bi.getImage();bh.getWidth();return bh}catch(bk){return null}}function l(bj){var bh=k(bj);if(bh==null){return""}var bi=bh.getName();if(bi==null){return""}return bi}function D(){if(am()<=0){return 0}var bi=SocialNetwork.getFriends();if(bi==null){return 0}var bk=0;var bj=0;for(var bh=0;bh<bi.length;bh++){if(bi[bh].getId()!=null&&""!=bi[bh].getId()){bk++}}return bi.length}function B(bh){var bk=System.currentTimeMillis();if(oss_GetFriendsState()!=OSS_FB_ITEM_STATE.READY){return 0}var bj=SocialNetwork.getFriends();var bl=0;for(var bi=0;bi<bj.length&&bl<bh;bi++){if(!bj[bi].getInstalled()&&bj[bi].getId()!=null&&bj[bi].getId()!=""){bl++}}return bl}function O(bh){return bh}function k(bm){if(am()<=0){return null}var bn=O(bm);var bh=SocialNetwork.getUser();if(bn==bh.getId()){return SocialNetwork.getUser()}var bl=SocialNetwork.getFriends();if(bl!=null){for(var bk=0;bk<bl.length;bk++){bh=bl[bk];if(bn==bh.getId()){return bh}}}var bj=SocialNetwork.getWorldPlayer();if(bj!=null){for(var bi=0;bi<bj.length;bi++){bh=bj[bi];if(bn==bh.getId()){if(bh.getName()==""){}bh.m_infos.name=getWorldFBName(bn);return bh}}}return null}window.OSS_DEFAULT_TIMEOUT=30;window.OSS_REQ_STATE={};OSS_REQ_STATE.NO_REQUEST=0;OSS_REQ_STATE.IN_PROGRESS=1;OSS_REQ_STATE.OK=2;OSS_REQ_STATE.ERROR=3;window.s_oss_requestState=OSS_REQ_STATE.NO_REQUEST;window.s_oss_requestResults=null;function aR(){}function b(bl,bn,bh,bj,bi,bk,bm){if(s_oss_requestState==OSS_REQ_STATE.IN_PROGRESS){throw new Error("Not support multi processing")}s_oss_requestState=OSS_REQ_STATE.IN_PROGRESS;Warn("Load leaderboard here!!!!!!!!!!!!!!!!!!!!!!!");loadWorldLederBoar(10,ab)}function aY(bj,bm,bh,bl,bi,bk){if(s_oss_requestState==OSS_REQ_STATE.IN_PROGRESS){throw new Error("Not support multi processing")}s_oss_requestState=OSS_REQ_STATE.IN_PROGRESS;Warn("Load leaderboard here!!!!!!!!!!!!!!!!!!!!!!!");SocialNetwork.RequestHiscores(aD(),7,ab)}function ab(bh){if(bh){s_oss_requestResults=bh}else{s_oss_requestResults=null}s_oss_requestState=OSS_REQ_STATE.OK}function G(){return s_oss_requestState}function f(){return s_oss_requestResults}function aD(){if(window.location.href.indexOf("localhost")>=0){return"120047441870345"}else{if(window.location.href.indexOf("vntools.sai.gameloft.com")>=0){return"975716222565956"}else{return"2207076906047492"}}}function w(){if(window.location.href.indexOf("localhost")>=0){return"55adb9cba664490cf769b44ac8c94272"}else{if(window.location.href.indexOf("vntools.sai.gameloft.com")>=0){return"130e3a32de493cec1979b193d8340e7d"}else{return"15fba6f1032b1bd6652cdcb20a925245"}}}function aa(){fbm_state=FBM_STATE_END}function aw(){msgBox_AddMsgBox(MSGBOX_TYPE.LOADING,getString(TEXT.MAIN_FB_CONNECTING));c=aL;fbm_state=al}function aM(){msgBox_AddMsgBox(MSGBOX_TYPE.LOADING,getString(TEXT.MAIN_FB_CONNECTING));c=a1;fbm_state=al}function U(){a4();msgBox_AddMsgBox(MSGBOX_TYPE.CONFIRM,getString(TEXT.MAIN_FB_LOGGED_OUT));fbm_state=FBM_STATE_END}function a6(){if(am()<0){msgBox_AddMsgBox(MSGBOX_TYPE.CONFIRM,getString(TEXT.MAIN_notice_login_facebook))}else{A()}}function a9(){if(am()<0){throw new Eror("TBC: What are we doing here?")}else{SocialNetwork.InviteByDialog(getString(TEXT.MAIN_FB_INVITE),a5)}}function a5(bh,bi){switch(bh){case 0:break;case 1:break;case 2:break}}function C(bh){if(bh){msgBox_AddMsgBox(MSGBOX_TYPE.LOADING,getString(TEXT.MAIN_FB_CONNECTING));fbm_state=al}else{fbm_state=FBM_STATE_END}}function j(){switch(fbm_state){case al:af();break;case aG:av();break;case aI:fbm_state_GetFriends();break;case aX:fbm_state_InitDependencies();break;case aj:fbm_state_SendHighscore();break;case an:fbm_state_Import();break;case X:fbm_state_LoadAllFriends();break;case o:fbm_state_AnonConnect();break;case Z:fbm_state_LinkCredential();break}}function af(){var bh=am();if(bh<0){S();fbm_state=aG}else{if(bh>0){ba()}}}var aF=true;function ak(){aF=true}function e(){aF=false}function av(){if(!aF){return}y();var bh=am();if(bh>0){ba()}else{if(bh<0){ax();msgBox_AddMsgBox(MSGBOX_TYPE.YES_NO,getString(TEXT.MAIN_FB_RETRY),MSGBOX_CALLBACK.FACEBOOK_RETRY);fbm_state=bg}}}function ba(){if(c!=aV){ax()}if(false&&RMS_GetRecordValue(RMS_RECORD_FACEBOOK_REWARD_GIVEN)==0){ax();RMS_SetRecordValue(RMS_RECORD_FACEBOOK_REWARD_GIVEN,1);var bi=s_arrayTweaks[isPremium()?ITweaks.PREMIUM_COINS_FACEBOOK_FIRST_CONNECT:ITweaks.COINS_FACEBOOK_FIRST_CONNECT][0];var bh=DecodeInt(s_systemDiamonds);bh+=bi;s_systemDiamonds=EncodeInt(bh);s_GLOT_cash_earned_from_facebookLogin=""+bi;RMS_SetRecordValue(RMS_RECORD_CURRENT_DIAMONDS,s_systemDiamonds);guiMgr_ActivateGUILayer(GUI_LAYER.FACEBOOK_REWARD,true);fbm_post_state=FBM_POST_STATE_INIT;fbm_state=i;RMS_Save()}else{loadDataFromSever(K)}}function K(){fbm_post_state=FBM_POST_STATE_INIT;switch(c){case aL:msgBox_AddMsgBox(MSGBOX_TYPE.CONFIRM,getString(TEXT.MAIN_FB_CONNECTED),MSGBOX_CALLBACK.FB_LOGIN_OK);fbm_state=Q;break;case bc:fbm_cmd_Share();fbm_state=FBM_STATE_END;break;case aV:fbm_StartLoadingFriends();break;case a1:fbm_state=FBM_STATE_END;break}}function aT(){fbm_state=FBM_STATE_END}window.s_fb_last_shared_score=-1;function A(){var bk=getString(TEXT.MAIN_CHARACTER_NAME_00+s_game_characterIndex);s_aArgumentStringArr[0]=R();s_aArgumentStringArr[1]=Text_FormatNumber(DecodeInt(s_game_score));s_aArgumentStringArr[2]=bk;var bj=getFormattedStringEx(getString(TEXT.MAIN_FB_SHARE_TEXT),s_aArgumentStringArr);var bh="games";var bi="http://interstatic01.gameloft.com/"+bh+"/pockethd/"+1706+"/JD_generic.jpg";s_fb_last_shared_score=DecodeInt(s_game_score);bj=bj.replace("|","");SocialNetwork.postToWall(bj,"http://play.ludigames.com","Danger Dash",null,bj,bi,null,null,null)}function aC(bh,bi){switch(bh){case 0:CurrentExploits_AddExploitValue(IExploit.EX_T_SHARE);Achievements_AddAchievementValue(IExploit.EX_T_SHARE);s_bSharedScore=true;SetButtonVisibility(GameData.k_gameResultScreen,GameData.k_ResultScreen_BtnFacebook_Share,false);SetButtonVisibility(GameData.k_gameFacebookMenu,GameData.k_FacebookMenu_Btn_Share,false);SetButtonVisibility(GameData.k_gameResults_Top,GameData.k_Results_Top_BtnFacebook_Share,false);Warn("Upload player informations(fb id, score, player character index,...) on data server here!");break;case 1:SetButtonEnabled(GameData.k_gameResults_Top,GameData.k_Results_Top_BtnFacebook_Share,true);break;case 2:msgBox_AddMsgBox(MSGBOX_TYPE.CONFIRM,getString(TEXT.MAIN_CONNECTION_ERROR)+" "+getString(TEXT.MAIN_NETWORK_ERROR),MSGBOX_CALLBACK.CONFIRM);SetButtonEnabled(GameData.k_gameResults_Top,GameData.k_Results_Top_BtnFacebook_Share,true);break}}_register_gui_message(GameData.k_gameMsgBox_Loading,n);function n(bi,bh){if(bi==GUI_MESSAGE_INITIALIZE){guiMgr_ResetAllLayerButtonPressedState();guiMgr_SetLayerInputBlockState(guiMgr_GetGUILayerIndex(guiMgr_iCurrentLayerType),true)}if(bi==GUI_MESSAGE_UPDATE){gui_UpdateGameLayerAnims(GameData.k_gameMsgBox_Loading);if(s_showCantGoBack){SetTextAreaVisibility(GameData.k_gameMsgBox_Loading,GameData.k_MsgBox_Loading_txt_CantGoBack,((System.currentTimeMillis()&(1<<9))!=0));s_showCantGoBack_Time+=s_game_frameDT;if(s_showCantGoBack_Time>MAX_CANTGOBACK_TIME){s_showCantGoBack=false;s_showCantGoBack_Time=0;SetTextAreaVisibility(GameData.k_gameMsgBox_Loading,GameData.k_MsgBox_Loading_txt_CantGoBack,false)}}}if(bi==GUI_MESSAGE_CLOSE){s_showCantGoBack=false;s_showCantGoBack_Time=0}if(bi==GUI_MESSAGE_BEFORE_PAINT){guiMgr_PaintDarkBackGround()}if(bi==GUI_MESSAGE_AFTER_PAINT){}if(bi==GUI_MESSAGE_INPUT_EVENT){}if(bi==GUI_MESSAGE_INTRO){aU()}if(bi==GUI_MESSAGE_OUTRO){}}function aU(){SetTextAreaString(GameData.k_gameMsgBox_Loading,GameData.k_MsgBox_Loading_TxtMsg,s_msgBoxText);SetTextAreaString(GameData.k_gameMsgBox_Loading,GameData.k_MsgBox_Loading_TxtTitle,s_msgBoxText2);guiMgr_SetGUILayerState(GUI_LAYER.MSGBOX_LOADING,GUI_STATE_IDLE)}function ax(){guiMgr_ActivateGUILayer(GUI_LAYER.MSGBOX_LOADING,false,false);if(msgBox_GetCurrentMsgboxCallback()>=0){msgBox_ClickCallback(MSGBOX_ACTION.ACCEPT)}msgBox_GoToNext()}LowAPI.extendObject(ae,{GameState_FACEBOOK_WELCOME:be,gui_MsgBox_Loading_Close:ax,oss_Update:aR,oss_GetRequestState:G,oss_LoadLeaderboard:b,oss_LoadFriendLeaderboard:aY,oss_GetFacebookState:am,oss_GetRequestResult:f,oss_MyFacebookCredential:r,oss_GetFacebookPhotoState:aJ,oss_GetFacebookUserEx:k,oss_GetFacebookName:l,oss_GetFacebookPhoto:E,oss_FacebookLogout:a4,fbm_LoginAccepted:aT,fbm_Retry:C,fbm_Reset:aa,fbm_Login:aw,fbm_Logout:U,fbm_Update:j,fbm_Share:a6,fbm_Invite:a9,onPostedStatus:aC,fbm_FacebookAppId:aD,fbm_FacebookAppSecret:w,oss_MyFacebookId:ap,fbm_Logged:K,},true)})(window);