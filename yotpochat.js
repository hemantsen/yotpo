

var chatExist = false;
var offlineIsOpen = false;
function initLiveChat(params) {
  var chatDiv = document.createElement("DIV"); // Create html
  chatDiv.id = "chatInitWrapper"; // Insert text
  document.body.appendChild(chatDiv);
  document.getElementById(
    "chatInitWrapper"
  ).innerHTML = `<style type="text/css">*{box-sizing:box-sizing: border-box}.embeddedServiceHelpButton .helpButton .uiButton:hover::before, .embeddedServiceHelpButton .helpButton .uiButton:focus::before{display:none}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:none !important}.embeddedServiceHelpButton .helpButton{bottom:100px;display:none}.embeddedServiceHelpButton .helpButton .uiButton{cursor:pointer;background:#0022a5;height:56px;width:56px;display:inline-block;border-radius:50%;box-shadow:0 2px 3px rgba(0, 0, 0, 0.2);outline:none;border:none;color:white;text-align:center;min-width:auto}.embeddedServiceHelpButton .helpButton .uiButton .embeddedServiceIcon:before{margin:0;font-size:2rem}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:1px solid #005290}.embeddedServiceHelpButton .uiButton .helpButtonLabel{display:none}.embeddedServiceSidebar.layout-docked .dockableContainer, .embeddedServiceSidebar.layout-float .dockableContainer{text-align:inherit;border-radius:8px 8px 8px 8px;bottom:70px}.slds-assistive-text{display:none}.chat-header .head-chat-icon svg{fill:white;width:32px}.chat-header .header-btn svg{fill:white;width:18px}.burger-btn svg{fill:white;width:32px;padding-top:12px}.burger-btn{cursor:pointer;background:#0022a5;height:56px;width:56px;display:inline-block;border-radius:50%;box-shadow:0 2px 3px rgba(0,0,0,0.2);position:fixed;right:10px;bottom:10px;outline:none;border:none;color:white;text-align:center}.chat-spinner{padding-top:18px;width:32px;display:inline-block}.chat-spinner>.ball{width:8px;height:8px;background-color:white;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.chat-spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.chat-spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.burger-btn .chat-mini-icon{padding-top:18px}.embeddedServiceLiveAgentStateChatInputFooter.chasitorInputWrapper{background:rgb(0, 34, 165);background:linear-gradient( 180deg, rgba(0, 91, 255, 1) 0%, rgba(0, 34, 165, 1) 100% )}.embeddedServiceLiveAgentStateChat .chatSessionStartTime{font-size:11px;color:#999;padding:0 15px}.chat-offline{width:320px;background:white;box-shadow:2px 2px 20px rgb(0 0 0 / 20%);position:fixed;right:22px;bottom:70px;border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;font-family:var(--lwc-fontFamily,"Arial"),sans-serif}.chat-offline-body{height:330px;padding:1rem}.chat-offline .chat-header{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem}.chat-header{background:rgb(0, 34, 165);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAABUCAIAAAB1Kdm+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxRTIyQkZFQjVERjNFQjExQkFDQ0Y1REM5MDIwN0E0MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QzhDQ0VFRUYzNUUxMUVCOUFCOThGNkI3OTZBRDYxMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QzhDQ0VFREYzNUUxMUVCOUFCOThGNkI3OTZBRDYxMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFFMjJCRkVCNURGM0VCMTFCQUNDRjVEQzkwMjA3QTQyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFFMjJCRkVCNURGM0VCMTFCQUNDRjVEQzkwMjA3QTQyIi8+IDwvcmRmOkRlc2NyaXB0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);background-size:cover;padding:0.75rem;color:#fff;font-size:16px;line-height:1.5}.h-grid{display:flex;padding-bottom:0.25rem}.h-col{flex:1 1 0%;min-width:0}.header-btn{cursor:pointer;background:none;border:none;border-radius:0.25rem;opacity:0.5}.header-btn:hover{opacity:1}.header-btn+.header-btn{margin-left:0.25rem}.slds-form-element__label{width:100%;display:inline-block;font-size:0.875rem;font-weight:normal;color:rgb(17,17,17);overflow-wrap:break-word;word-break:break-word}.slds-input{box-sizing:border-box;width:100%;border:1px solid rgb(117, 117, 117);appearance:none;background-color:rgb(248, 248, 248);font-family:inherit;box-shadow:none;transition:border-color 100ms linear 0s, background-color 100ms linear 0s;border-radius:4px;font-size:0.875rem;font-weight:normal;color:rgb(17, 17, 17);padding:8px;margin:2px 0px}.slds-input:focus,.slds-input:active{outline:none;border-color:#0022a5;background-color:rgb(255,255,255)}.slds-select_container{position:relative}.slds-select_container:before{border-bottom:5px solid;top:calc(0.875rem - 6px)}.slds-select_container:after{border-top:5px solid;bottom:calc(0.875rem - 6px)}.slds-select_container:after,.slds-select_container:before{position:absolute;content:"";display:block;right:0.5rem;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;pointer-events:none}.slds-select_container .slds-select{-moz-appearance:none;-webkit-appearance:none;padding-left:0.5rem;padding-right:1.5rem}.slds-select{height:calc(1.875rem + 2px);width:100%;border:1px solid rgb(117,117,117);border-radius:0.25rem;background-color:#fff}.slds-select:active,.slds-select:focus{outline:0;border-color:#0022a5}.slds-required{color:#ea001e;margin:0 0.125rem}.slds-form-element__help{margin:0px;transition:height 100ms cubic-bezier(0, 0, 1, 1) 0s;overflow:hidden;font-size:0.75rem;font-weight:normal;color:rgb(217,51,17)}.embeddedServiceSidebarButton{background:#0022a5}.embeddedServiceSidebarButton:focus,.embeddedServiceSidebarButton:hover,.embeddedServiceSidebarButton:active{background:#001b84}.embeddedServiceSidebarButton:not(:disabled):focus,.embeddedServiceSidebarButton:not(:disabled):hover{background:#001b84}.slds-button_brand{border:0px;cursor:pointer;border-radius:4px;font-size:0.875rem;font-weight:normal;color:rgb(255,255,255);padding:12px;background-color:#0022a5;display:inline-block}.slds-button_brand:hover,.slds-button_brand:focus,.slds-button_brand:active{background:#001b84}.slds-button_brand.slds-button_full-width{width:100%}.prechat-from{padding:1rem}.prechat-from .slds-form-element{margin-bottom:0.5rem}.chat-min-btn{display:none}.d-block{display:block}.text-center{text-align:center}.hide{display:none}svg{pointer-events:none}</style><div id="chatBtnOnpage" class="burger-btn" onclick="clickChatButton(event)"><div class="chat-spinner hide" id="chatSpinner"><div class="ball bounce1"></div><div class="ball bounce2"></div><div class="ball bounce3"></div></div> <svg focusable="false" data-key="chat" aria-hidden="true" viewBox="0 0 52 52" class="slds-icon slds-icon_x-small" id="chatBubble" > <g> <path d="M26 4C12.7 4 2.1 13.8 2.1 25.9c0 3.8 1.1 7.4 2.9 10.6.3.5.4 1.1.2 1.7l-3.1 8.5c-.3.8.5 1.5 1.3 1.3l8.6-3.3c.5-.2 1.1-.1 1.7.2 3.6 2 7.9 3.2 12.5 3.2C39.3 48 50 38.3 50 26.1 49.9 13.8 39.2 4 26 4zM14 30c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" ></path> </g> </svg><svg id="chatMinIcon" class="chat-mini-icon hide" focusable="false" viewBox="-4 0 24 18" width="32" xmlns="http://www.w3.org/2000/svg" > <path fill="#FFFFFF" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z" ></path> </svg></div> <section id="chatOffline" class="chat-offline hide"><div class="chat-header"><div class="h-grid"><div class="h-col"> <span class="slds-icon-utility-chat head-chat-icon slds-icon_container" title="Chat Minimized" > <svg focusable="false" data-key="chat" aria-hidden="true" viewBox="0 0 52 52" class="slds-icon slds-icon_x-small" > <g> <path d="M26 4C12.7 4 2.1 13.8 2.1 25.9c0 3.8 1.1 7.4 2.9 10.6.3.5.4 1.1.2 1.7l-3.1 8.5c-.3.8.5 1.5 1.3 1.3l8.6-3.3c.5-.2 1.1-.1 1.7.2 3.6 2 7.9 3.2 12.5 3.2C39.3 48 50 38.3 50 26.1 49.9 13.8 39.2 4 26 4zM14 30c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" ></path> </g> </svg> </span></div><div> <button class="header-btn" onclick="closeOffline(event)"> <span class="slds-icon-utility-close slds-icon_container"> <svg focusable="false" data-key="close" aria-hidden="true" viewBox="0 0 52 52" class="slds-icon slds-icon-text-default" > <g> <path d="M31 25.4l13-13.1c.6-.6.6-1.5 0-2.1l-2-2.1c-.6-.6-1.5-.6-2.1 0L26.8 21.2c-.4.4-1 .4-1.4 0L12.3 8c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l13.1 13.1c.4.4.4 1 0 1.4L8 39.9c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L25.3 31c.4-.4 1-.4 1.4 0l13.1 13.1c.6.6 1.5.6 2.1 0L44 42c.6-.6.6-1.5 0-2.1L31 26.8c-.4-.4-.4-1 0-1.4z" ></path> </g> </svg> </span> </button></div></div><div><div>Offline</div></div></div><div class="chat-offline-body"><div class="text-center"><p> Our agents are not available at the moment</p> <br /> <br /> <br /></div><div class="text-center"> <a href="">Lorem ipsum dolor sit amet </a></div><div class="text-center"> <br /> <button class="slds-button slds-button_brand">Contact Us</button></div></div> </section>`;
}
initLiveChat();

var initESW = function (gslbBaseURL) {
  embedded_svc.settings.displayHelpButton = true; //Or false
  embedded_svc.settings.language = ""; //For example, enter 'en' or 'en-US'

  //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
  //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

  //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
  //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

  // Settings for Chat
  //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
  // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
  // Returns a valid button ID.
  //};
  //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
  //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
  //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";
  /*
      @TODO pass values here or it might be changed a bit like
      */
  embedded_svc.settings.prepopulatedPrechatFields = {
    FirstName: "Rajendra",
    LastName: "Visitor",
    Email: "rajendra.ogra@gmail.com",
    Reply_to_Email__c: "rajendra.ogra@gmail.com",
    Requester_Email__c: "rajendra.ogra@gmail.com",
    Requester_Name__c: "Rajendra Ogra",
    Product_Line__c: "Loyalty" //SMS, Loyalty, UGC
  };
  embedded_svc.settings.extraPrechatFormDetails = [
    {
      label: "Origin",
      value: "Live Chat",
      transcriptFields: [],
      displayToAgent: false
    },
    {
      label: "URL",
      value: window.location.href,
      displayToAgent: true,
      transcriptFields: ["URL__c"]
    }
  ];
  embedded_svc.settings.extraPrechatInfo = [
    {
      entityName: "Contact",
      showOnCreate: false,
      linkToEntityName: "Case",
      linkToEntityField: "ContactId",
      saveToTranscript: "Contact",
      entityFieldMaps: [
        {
          isExactMatch: true,
          fieldName: "Email",
          doCreate: false,
          doFind: true,
          label: "Email"
        }
      ]
    },
    {
      entityName: "Case",
      showOnCreate: true,
      entityFieldMaps: [
        {
          isExactMatch: false,
          fieldName: "Origin",
          doCreate: true,
          doFind: false,
          label: "Origin"
        }
      ]
    }
  ];

  embedded_svc.init(
    "https://yotpo--full.my.salesforce.com",
    "https://full-yotpo1.cs84.force.com/survey",
    gslbBaseURL,
    "00D5E000000A5ot",
    "Loyalty",
    {
      baseLiveAgentContentURL:
        "https://c.la2-c1cs-cdg.salesforceliveagent.com/content",
      deploymentId: "5723W000000blJJ",
      buttonId: "5735E00000002et",
      baseLiveAgentURL: "https://d.la2-c1cs-cdg.salesforceliveagent.com/chat",
      eswLiveAgentDevName:
        "EmbeddedServiceLiveAgent_Parent04I5E0000008P1DUAU_17a812f37dc",
      isOfflineSupportEnabled: false
    }
  );
};

if (!window.embedded_svc) {
  var s = document.createElement("script");
  s.setAttribute(
    "src",
    "https://yotpo--full.my.salesforce.com/embeddedservice/5.0/esw.min.js"
  );
  s.onload = function () {
    initESW(null);
  };
  document.body.appendChild(s);
} else {
  initESW("https://service.force.com");
}

////////////////------------new code-----------------///////////////

function clickChatButton(e) {
  if (embedded_svc.settings.agentAvailableOnButtonClick) {
    if (!chatExist) {
      closeOffline(e);
      embedded_svc.bootstrapEmbeddedService();
      document.querySelector("#chatBubble").classList.add("hide");
      document.querySelector("#chatSpinner").classList.remove("hide");
      chatExist = true;
    } else {
      document.querySelector("c-chat-header-l-w-c").minimize();
    }
  } else {
    if (!offlineIsOpen) {
      document.querySelector("#chatOffline").classList.remove("hide");
      document.querySelector("#chatBubble").classList.add("hide");
      document.querySelector("#chatMinIcon").classList.remove("hide");
      offlineIsOpen = true;
    } else {
      closeOffline(e);
    }
  }
}
function closeOffline(e) {
  document.querySelector("#chatOffline").classList.add("hide");
  document.querySelector("#chatBubble").classList.remove("hide");
  document.querySelector("#chatMinIcon").classList.add("hide");
  offlineIsOpen = false;
}
embedded_svc.addEventHandler("afterMaximize", function (data) {
  document.querySelector("#chatBtnOnpage").classList.remove("hide");
  document.querySelector("#chatSpinner").classList.add("hide");
  document.querySelector("#chatMinIcon").classList.remove("hide");
});
embedded_svc.addEventHandler("afterMinimize", function (data) {
  document.querySelector("#chatBtnOnpage").classList.add("hide");
});
embedded_svc.addEventHandler("afterDestroy", function (data) {
  document.querySelector("#chatBtnOnpage").classList.remove("hide");
  document.querySelector("#chatBubble").classList.remove("hide");
  document.querySelector("#chatMinIcon").classList.add("hide");
  chatExist = false;
});
