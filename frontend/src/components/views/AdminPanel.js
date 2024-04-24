import React, { useEffect, useState } from 'react';
import './CSS/AdminPanel.css';

const AdminPanel = ({setModalBox}) => {
    // CALC1========================================================
    const [calc1, setCalc1] = useState([]);
    useEffect(() => {
        const api = 'http://localhost:1231/consumer';

        fetch(api)
            .then((calc1) => calc1.json())
            .then((calc1) => {
                setCalc1(calc1.data);
            });
    }, []);
//CALC2 =======================================================
    const [calc2, setCalc2] = useState([]);
    useEffect(() => {
        const api = 'http://localhost:1231/mortgage';

        fetch(api)
            .then((calc2) => calc2.json())
            .then((calc2) => {
                setCalc2(calc2.data);
            });
    }, []);
    // CALC3==============================================================
    const [calc3, setCalc3] = useState([]);
    useEffect(() => {
        getAllCalc3()
    },[])
const getAllCalc3 = () => {
    const api = 'http://localhost:1231/car-loan';

    fetch(api, {
        method: 'GET',
    })
        .then((calc3) => calc3.json())
        .then((calc3) => {
            setCalc3(calc3.data);
        });
};

    return (
        <>
            <div className={'adminPanel'}>

                <div className={'admin-panels'}>
                    {/*CALC1======================================================*/}
                    <div className={'Calc'}>
                        <table>
                            <thead>
                            <tr>
                                <td colSpan={2}><h2>Потреб. к.</h2></td>
                            </tr>
                            <tr>
                                <th>name</th>
                                <th>rate</th>
                                <th>
                                    <button className={'add'} onClick={() => setModalBox('AddCalcBoxCS')}>Добавить</button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {calc1.map((calc) => {
                                return (
                                    <tr key={calc._id}>
                                        <td>{calc.name}</td>
                                        <td>{calc.rate}</td>
                                    </tr>
                                );
                            })
                            }
                            </tbody>
                        </table>
                    </div>
                    {/*CALC2==================================================*/}
                    <div className={'Calc'}>
                        <table>
                            <thead>
                            <tr>
                                <td colSpan={2}><h2>Ипот. к.</h2></td>
                            </tr>
                            <tr>
                                <th>name</th>
                                <th>rate</th>
                                <th>
                                    <button className={'add'} onClick={() => setModalBox('AddCalcBoxM')}>Добавить</button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {calc2.map((calc) => {
                                return (
                                    <tr key={calc._id}>
                                        <td>{calc.name}</td>
                                        <td>{calc.rate}</td>
                                    </tr>
                                );
                            })
                            }
                            </tbody>
                        </table>
                    </div>
                    {/*CALC3=============================================================*/}
                    <div className={'Calc'}>
                        <table>
                            <thead>
                            <tr>
                                <td colSpan={2}><h2>Автокр. к.</h2></td>
                            </tr>
                            <tr>
                                <th>name</th>
                                <th>rate</th>
                                <th>
                                    <button className={'add'} onClick={() => setModalBox('AddCalcBoxCS')}>Добавить</button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {calc3.map((calc) => {
                                return (
                                    <tr key={calc._id}>
                                        <td>{calc.name}</td>
                                        <td>{calc.rate}</td>
                                    </tr>
                                );
                            })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;