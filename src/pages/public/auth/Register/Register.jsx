import React, { useState } from 'react'
import styles from './Register.module.css'
import { Link } from 'react-router-dom';
import registerUser from '../../../../services/hooks/registerUser';


function Register() {

    const [step, setStep] = useState(2);

    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [motherTongue, setMotherTongue] = useState("");

    function register() {

        const dateTime = new Date();

        const user = {
            name: username,
            lastname: lastname,
            email: email,
            passwordHash: password,
            dateBirth: dateBirth,
            createdAt: dateTime,
            language: motherTongue
        }

        registerUser(user);

    }

    return (
        <>
            <div className={styles.registerSec}>


                {step === 1 && (

                    <section className={styles.importantParagraphs}>

                        <p>Esta metodologia solo ha sido creada para personas que realmente se van a tomar en serio el aprendizaje,
                            para personas que el ingles representa o representará algo en sus vidas.</p>

                        <p>
                            Ha sido diseñada especificamente teniendo en cuenta: días que no tienes mucho animo de estudiar,
                            si solo puedes dedicarle 30 minutos al dia y sobretodo mantenible en el tiempo
                        </p>

                        <p>Hemos pasado meses y años refinando cada funcionalidad, estrategia, y sección, todo ha tenido una razón detrás.</p>

                        <p>Es fundamental que ahora coloques de tu parte <br /> para que este entrenamiento funcione</p>

                        <button onClick={() => setStep(2)}>Lo tendre en cuenta</button>

                        {/*Arrow function: without that it executes when rendering, with that executes only if the user clicks in */}

                    </section>
                )}

                {step === 2 && (
                    <div>

                        <form action="" className={styles.form}>
                            <label htmlFor="">Name
                                <input value={username}
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder='Katerin Rosetti' />
                            </label> <br />

                            <label htmlFor="">Lastname
                                <input value={lastname}
                                    type="text"
                                    onChange={(e) => setLastname(e.target.value)}
                                    placeholder='Katerin Rosetti' />
                            </label> <br />

                            <label htmlFor="">Email
                                <input value={email}
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Katerin Rosetti' />
                            </label> <br />

                            <label htmlFor="">Password
                                <input value={password}
                                    type="text"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Katerin Rosetti' />
                            </label> <br />

                            <label htmlFor="">Date of Birth
                                <input value={dateBirth}
                                    type="date"
                                    onChange={(e) => setDateBirth(e.target.value)}
                                    placeholder='Katerin Rosetti' />
                            </label> <br />

                            {/* 
                            <label htmlFor="">Profile Picture
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label> <br />
                                */}

                            <label htmlFor="">Mother Tongue
                                <input value={motherTongue}
                                    type="text"
                                    onChange={(e) => setMotherTongue(e.target.value)}
                                    placeholder='Katerin Rosetti' />
                            </label>


                        </form>

                        <button onClick={function () {
                            {/* setStep(2) */}
                            register();
                        }}
                        >Avanzar</button>
                    </div>
                )}



                {step === 3 && (
                    <div>
                        <label htmlFor="">
                            <h1>Could you tell us your interets?</h1>
                            <input type="text" />
                        </label>
                        {/* use navigate */}
                        <Link to="/dashboard">Enviar Datos</Link>
                    </div>

                )}


            </div>
        </>
    )
}

export default Register