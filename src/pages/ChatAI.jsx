import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import OpenAI from 'openai';
import { useLogin } from '../hook/useLogin';
import { getAllCourses } from '../API/getAllCourses';

function ChatAI() {
    useLogin()

    const [courses, setCourses] = useState([])
    useEffect(() => {
        getAllCourses((data) => {
            setCourses(data.data)
        })
    }, []);

    const dataCourses = courses.map((dataCourse) => (
        dataCourse.title
    ))
    console.log(dataCourses);

    const [comand, setComand] = useState("");
    const [results, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_KEY,
        dangerouslyAllowBrowser: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setComand('');
        setLoading(true);

        try {
            const res = await openai.chat.completions.create({
                messages: [
                    ...results,
                    {
                        role: "assistant",
                        content: `anda adalah asisten 
                        Rule Format Response :
                        1. anda adalah seorang pelayan yang hanya menjawab pertanyaan seputar perograming
                        2. Jangan menjawab pertanyaan di luar programing dan di luar CSA Learning
                        3. CSA Learning Merupakan e-learning yang bisa di akses oleh semua orang dan memberikan pembelajaran yang terbaru berbentuk vidio
                        4. Website Ini bernama CSA Learning
                        5. jika ada pertanyaan yang di luar programing dan di luar CSA Learning tolong katakan maaf ini di luar percakapan 
                        6. jika user meminta materi apa saja yang ada sekarang dalam CSA learning berikan data ini ${dataCourses}`,
                    },
                    {
                        role: "user",
                        content: comand
                    }
                ],
                model: "gpt-3.5-turbo",
            });

            const responseResult = res.choices[0].message.content;

            setResult([
                ...results,
                { role: "user", content: 'Me : ' + comand },
                { role: "assistant", content: 'CSA AI : ' + responseResult }

            ]);

            setLoading(false);
        } catch (error) {
            console.error("Error sending message to OpenAI:", error);
            setLoading(false);
        }
    };


    console.log(results);

    return (
        <AuthLayout>
            <section className='chatAI' >
                <div className="row chatbot d-grid align-items-center">
                    <div className=" col answerbox text-secondary rounded-2 p-3">
                        {
                            loading ? <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> :
                                results.map((item, index) => (
                                    <div key={index} className={` ${item.role === 'user' ? 'text-end userQuestion' : 'answerAI'}`} >
                                        <p> {item.content}</p>
                                    </div>
                                ))
                        }
                    </div>

                    <div className=" col question bg-white text-secondary d-grid rounded-2 ">
                        <div className="question-content ">

                            <div className="form-floating">
                                <textarea
                                    name='comand'
                                    className="form-control"
                                    value={comand}
                                    onChange={(e) => setComand(e.target.value)}
                                    id="comand"

                                />
                                <label htmlFor="comand" >Create a question and AI will answer accurately...</label>
                            </div>
                            <button className='btn mt-3' onClick={(e) => handleSubmit(e)}>Submit</button>
                        </div>
                    </div>





                </div>
            </section>
        </AuthLayout>
    )
}

export default ChatAI