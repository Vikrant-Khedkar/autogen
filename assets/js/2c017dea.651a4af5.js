"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||s;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={title:"AutoGen Meets GPTs",authors:"gagb",tags:["openai-assistant"]},r=void 0,o={permalink:"/autogen/blog/2023/11/13/OAI-assistants",source:"@site/blog/2023-11-13-OAI-assistants/index.mdx",title:"AutoGen Meets GPTs",description:"OpenAI Assistant",date:"2023-11-13T00:00:00.000Z",formattedDate:"November 13, 2023",tags:[{label:"openai-assistant",permalink:"/autogen/blog/tags/openai-assistant"}],readingTime:2.03,truncated:!1,authors:[{name:"Gagan Bansal",title:"Senior Researcher at Microsoft Research",url:"https://www.linkedin.com/in/gagan-bansal/",imageURL:"https://github.com/gagb.png",key:"gagb"}],nextItem:{title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",permalink:"/autogen/blog/2023/11/09/EcoAssistant"}},l={authorsImageUrls:[void 0]},p=[{value:"TLDR",id:"tldr",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Basic Example",id:"basic-example",children:[],level:2},{value:"Code Interpreter Example",id:"code-interpreter-example",children:[],level:2},{value:"Limitations and Future Work",id:"limitations-and-future-work",children:[],level:2},{value:"Acknowledgements",id:"acknowledgements",children:[],level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenAI Assistant",src:n(9433).Z})),(0,i.kt)("p",{align:"center"},(0,i.kt)("em",null,"AutoGen enables collaboration among multiple ChatGPTs for complex tasks.")),(0,i.kt)("h2",{id:"tldr"},"TLDR"),(0,i.kt)("p",null,"OpenAI assistants are now integrated into AutoGen via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/autogen/agentchat/contrib/gpt_assistant_agent.py"},(0,i.kt)("inlineCode",{parentName:"a"},"GPTAssistantAgent")),".\nThis enables multiple OpenAI assistants, which form the backend of the now popular GPTs, to collaborate and tackle complex tasks.\nCheckout example notebooks for reference:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_oai_assistant_twoagents_basic.ipynb"},"Basic example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_oai_code_interpreter.ipynb"},"Code interpreter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_oai_assistant_function_call.ipynb"},"Function calls"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Earlier last week, OpenAI introduced ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/blog/introducing-gpts"},"GPTs"),", giving users ability to create custom ChatGPTs tailored for them.\n",(0,i.kt)("em",{parentName:"p"},"But what if these individual GPTs could collaborate to do even more?"),"\nFortunately, because of AutoGen, this is now a reality!\nAutoGen has been pioneering agents and supporting ",(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/autogen-pdf"},"multi-agent workflows")," since earlier this year, and now (starting with version 0.2.0b5) we are introducing compatibility with the ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/blog/introducing-gpts"},"Assistant API"),", which is currently in beta preview."),(0,i.kt)("p",null,"To accomplish this, we've added a new (experimental) agent called the ",(0,i.kt)("inlineCode",{parentName:"p"},"GPTAssistantAgent")," that\nlets you seamlessly add these new OpenAI assistants into AutoGen-based multi-agent workflows.\nThis integration shows great potential and synergy, and we plan to continue enhancing it."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pyautogen\n")),(0,i.kt)("h2",{id:"basic-example"},"Basic Example"),(0,i.kt)("p",null,"Here's a basic example that uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"UserProxyAgent")," to allow an interface\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"GPTAssistantAgent"),"."),(0,i.kt)("p",null,"First, import the new agent and setup ",(0,i.kt)("inlineCode",{parentName:"p"},"config_list"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from autogen import config_list_from_json\nfrom autogen.agentchat.contrib.gpt_assistant_agent import GPTAssistantAgent\nfrom autogen import UserProxyAgent\n\nconfig_list = config_list_from_json("OAI_CONFIG_LIST")\n')),(0,i.kt)("p",null,"Then simply define the OpenAI assistant agent and give it the task!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# creates new assistant using Assistant API\ngpt_assistant = GPTAssistantAgent(\n    name="assistant",\n    llm_config={\n        "config_list": config_list,\n        "assistant_id": None\n    })\n\nuser_proxy = UserProxyAgent(name="user_proxy",\n    code_execution_config={\n        "work_dir": "coding"\n    },\n    human_input_mode="NEVER")\n\nuser_proxy.initiate_chat(gpt_assistant, message="Print hello world")\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GPTAssistantAgent")," supports both creating new OpenAI assistants or reusing existsing assistants\n(e.g, by providing an ",(0,i.kt)("inlineCode",{parentName:"p"},"assistant_id"),")."),(0,i.kt)("h2",{id:"code-interpreter-example"},"Code Interpreter Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GPTAssistantAgent")," allows you to specify an OpenAI tools\n(e.g., function calls, code interpreter, etc). The example below enables an assistant\nthat can use OpenAI code interpreter to solve tasks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# creates new assistant using Assistant API\ngpt_assistant = GPTAssistantAgent(\n    name="assistant",\n    llm_config={\n        "config_list": config_list,\n        "assistant_id": None,\n        "tools": [\n            {\n                "type": "code_interpreter"\n            }\n        ],\n    })\n\nuser_proxy = UserProxyAgent(name="user_proxy",\n    code_execution_config={\n        "work_dir": "coding"\n    },\n    human_input_mode="NEVER")\n\nuser_proxy.initiate_chat(gpt_assistant, message="Print hello world")\n')),(0,i.kt)("p",null,"Checkout more examples ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/tree/main/notebook"},"here"),"."),(0,i.kt)("h2",{id:"limitations-and-future-work"},"Limitations and Future Work"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group chat managers using GPT assistant are pending."),(0,i.kt)("li",{parentName:"ul"},"GPT assistants with multimodal capabilities haven't been released yet but we are committed to support them.")),(0,i.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GPTAssistantAgent")," was made possible through collaboration with\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IANTHEREAL"},"@IANTHEREAL"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://leoljl.github.io"},"Jiale Liu"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kevin666aa"},"Yiran Wu"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://qingyun-wu.github.io/"},"Qingyun Wu"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/people/chiw/"},"Chi Wang"),", and many other AutoGen maintainers."))}u.isMDXComponent=!0},9433:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/teaser-0b85f5efe5965c70b376b39a4ac34b4e.jpg"}}]);