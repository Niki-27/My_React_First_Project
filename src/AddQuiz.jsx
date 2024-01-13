import React from 'react';
import Head from './Head';

function Addquiz(props) {
    return (
        <div>
            <Head/>
            <div className=" w-full h-screen flex justify-center items-center bg-gray-500 text-xl font-bold">
                <div className=" max-w-[500px] bg-white shadow-2xl p-7 mx-auto">
                    <h1 className=" text-2xl text-center text-black">
                        Add Quiz
                    </h1>
                    <div className=" w-full m-auto">
                        <label htmlFor="">Question</label>
                        <textarea
                            type="text"
                            className=" border-[2px] rounded-lg p-2 m-2 block"
                        />
                    </div>
                    <div className=" w-full m-auto">
                        <label htmlFor="">Option 1</label>
                        <input
                            type="text"
                            className=" border-[2px] rounded-lg p-2 m-2 block"
                        />
                    </div>
                    <div className=" w-full m-auto">
                        <label htmlFor="">Option 2</label>
                        <input
                            type="text"
                            className=" border-[2px] rounded-lg p-2 m-2 block"
                        />
                    </div>
                    <div className=" w-full m-auto">
                        <label htmlFor="">Option 3</label>
                        <input
                            type="text"
                            className=" border-[2px] rounded-lg p-2 m-2 block"
                        />
                    </div>
                    <div className=" w-full m-auto">
                        <label htmlFor="">Option 4</label>
                        <input
                            type="text"
                            className=" border-[2px] rounded-lg p-2 m-2 block"
                        />
                    </div>
                    <div className=" w-full m-auto">
                        <label htmlFor="">Correct Answer</label>
                        <input
                            type="text"
                            className=" border-[2px] rounded-lg p-2 m-2 block"
                        />
                    </div>
                    <div className=" w-full flex justify-center items-center">
                        <button className=" border-[2px] rounded-lg p-2 m-2 block bg-sky-400">
                            Submit Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addquiz;