import React from 'react'
import Boba from "./bubbletea.js";
export default function Bubbletea() {
  return (
    <div>
        <h1>Bubbletea</h1>
        <table>
            <thead>
            <tr>
                <th>Name :</th>
                <th>Image :</th>
            </tr>
            </thead>
             <tbody>
                   { Boba.map((drink,index) => (
                        <tr key={index}>
                            <td>{drink.name}</td>
                            <td>
                                <img src={drink.url} width={100} height={80}></img>
                            </td>
                        </tr>
                    )) }
                </tbody>
        </table>
    </div>
  )
}
