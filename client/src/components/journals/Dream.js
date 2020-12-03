// Dream Journal component 

import React from "react";
import "./App.css";
import { dreamData } from "./data";

export const DreamJournal = () => {
    return (
        <>
            <div className="dream-container">
                {dreamData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Employee
                                key={key}
                                title={data.title}
                                userId={data.userId}
                                content={data.content}
                                date={data.date}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

const Dream = ({ title, userId, content, date }) => {
    if (!name) return <div />
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{title}</h5>
                    </td>
                    <td>
                        <h5>{userId}</h5>
                    </td>
                    <td>
                        <h4>{content}</h4>
                    </td>
                    <td>
                        <p>{date}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}