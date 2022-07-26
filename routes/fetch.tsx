// routes/add.tsx

/** @jsx h */
import {h} from "preact";
import {tw} from "@twind";

export default function Page(){
    return (
        <main class={tw`p-4`}>
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
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>
                    <div class={tw`flex justify-end mb-5`}>
                        <div class={tw`flex items-center mr-2 cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-sky-800`}>Edit</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-5 w-5 mr-3`} fill="none" viewBox="0 0 24 24" stroke="#075985" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class={tw`flex items-center cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-rose-800`}>Delete</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9f1239" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>Category name</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>What is the question?</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>This is the answer</span>
                    </div>
                </div>
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>
                    <div class={tw`flex justify-end mb-5`}>
                        <div class={tw`flex items-center mr-2 cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-sky-800`}>Edit</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-5 w-5 mr-3`} fill="none" viewBox="0 0 24 24" stroke="#075985" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class={tw`flex items-center cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-rose-800`}>Delete</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9f1239" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>Category name</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>What is the question?</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>This is the answer</span>
                    </div>
                </div>
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>
                    <div class={tw`flex justify-end mb-5`}>
                        <div class={tw`flex items-center mr-2 cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-sky-800`}>Edit</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-5 w-5 mr-3`} fill="none" viewBox="0 0 24 24" stroke="#075985" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class={tw`flex items-center cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-rose-800`}>Delete</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9f1239" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>Category name</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>What is the question?</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>This is the answer</span>
                    </div>
                </div>
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>
                    <div class={tw`flex justify-end mb-5`}>
                        <div class={tw`flex items-center mr-2 cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-sky-800`}>Edit</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-5 w-5 mr-3`} fill="none" viewBox="0 0 24 24" stroke="#075985" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class={tw`flex items-center cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-rose-800`}>Delete</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9f1239" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>Category name</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>What is the question?</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>This is the answer</span>
                    </div>
                </div>
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>
                    <div class={tw`flex justify-end mb-5`}>
                        <div class={tw`flex items-center mr-2 cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-sky-800`}>Edit</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-5 w-5 mr-3`} fill="none" viewBox="0 0 24 24" stroke="#075985" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class={tw`flex items-center cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-rose-800`}>Delete</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9f1239" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>Category name</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>What is the question?</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>This is the answer</span>
                    </div>
                </div>
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>
                    <div class={tw`flex justify-end mb-5`}>
                        <div class={tw`flex items-center mr-2 cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-sky-800`}>Edit</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-5 w-5 mr-3`} fill="none" viewBox="0 0 24 24" stroke="#075985" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class={tw`flex items-center cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-rose-800`}>Delete</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9f1239" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>Category name</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>What is the question?</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>This is the answer</span>
                    </div>
                </div>
                <div class={tw`shadow-md p-2 bg-gray-100 border-l-slate-700 border-2 mb-5`}>
                    <div class={tw`flex justify-end mb-5`}>
                        <div class={tw`flex items-center mr-2 cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-sky-800`}>Edit</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class={tw`h-5 w-5 mr-3`} fill="none" viewBox="0 0 24 24" stroke="#075985" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class={tw`flex items-center cursor-pointer`}>
                            <small class={tw`mr-1 font-semibold text-rose-800`}>Delete</small>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#9f1239" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div class={tw`flex items-center mb-2`}>
                        <small class={tw`mr-2`}><b>Category:</b></small>
                        <span>Category name</span>
                    </div>
                    <div class={tw`grid grid-flow-row mb-2`}>
                        <small><b>Q No. #</b></small>
                        <span>What is the question?</span>
                    </div>
                    <div class={tw`grid grid-flow-row`}>
                        <small><b>Answer</b></small>
                        <span>This is the answer</span>
                    </div>
                </div>
            </div>
        </main>
    );
}