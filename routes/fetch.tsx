// routes/add.tsx

/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";
import {Handlers, PageProps} from "$fresh/server.ts";

interface Qna{
    category: string;
    question: string;
    answer: string;
}

export const handler: Handlers<Qna | null> = {
    async GET(_,ctx){
        const url = `https://web-projects-cba0b-default-rtdb.firebaseio.com/qna/gerZIy0RY6WYkDdVMEtmWRDUSMc2/qna.json`;
        const resp = await fetch(url);
        if(resp.status === 404){
            return ctx.render(null);
        }
        const qna: Qna = await resp.json();
        return ctx.render(qna);
    },
};

export default function Page({data}: PageProps<Qna | null>){
    if(!data){
        return <h1>No QnA found..</h1>
    }
    const r = JSON.stringify(data);
    const tmp = JSON.parse(r);
    const dta = [];
    for(let t in tmp){
        dta.push(tmp[t]);
    }

    return (
        <main class={tw`p-4`}>
            {JSON.stringify(dta)}
            <div class={tw`border-2 rounded-lg border-gray-500 sticky top-4 bg-white`}>
                <div class={tw`flex items-center bg-gray-200 rounded-t-lg`}>
                    <span class={tw`mx-2 font-semibold text-sm`}>Category</span>
                    <select class={tw`w-full bg-gray-300 p-2 outline-none rounded-tr-lg`} id="view_categories">
                        <option value="">Loading categories...</option>
                    </select>
                </div>
                <div class={tw`flex p-3`}>                
                    <input type="search" id="search_text" list="queries" placeholder="Try typing 'English' to search.." class={tw`w-full outline-none`}/>
                    <datalist id="queries"></datalist>
                    <button class={tw`mr-1`} id="search_button">
                        <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-6 w-6 cursor-pointer`} fill="none" viewBox="0 0 24 24" stroke="#701a75" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <h1 class={tw`text-xl my-4 text-gray-600 font-semibold`}>List of QnAs</h1>
            <div id="content">                
                {
                    dta.map((value,index)=>{
                        <li>{JSON.stringify(value)}</li>
                    })
                }
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>                    
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>{data.category}</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>{data.question}</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>{data.answer}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}