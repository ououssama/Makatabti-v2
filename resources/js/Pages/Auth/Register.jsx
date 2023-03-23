import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link, useForm } from "@inertiajs/react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    direction: rtl;
    background-color: #73a580;
    objectfit: cover;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: start;
    padding: 3em 5em 6em;
    width: 100%;
    background-color: white;
    height: 100%;
    overflow-y: hidden;
    margin: 0px;
    box-sizing: border-box;
`;

const H1 = styled.h1`
    font-size: 64px;
    color: #73a580;
    margin: 0 0 12px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 360px;
    min-width: 250px;
`;
const Label = styled.label`
    font-size: 18px;
    color: #73a580;
    text-align: start;
`;

const Input = styled.input`
    color: black;
    font-size: 18px;
    direction: rtl;
    border: none;
    width: 100%;
    padding: 10px;
    background-color: #c5c39294;
    border-radius: 5px;
    box-sizing: border-box;
    &:focus,
    &:hover,
    &:active {
        outline: none;
    }
`;

const SubmitBtn = styled.input`
    margin-top: 30px;
    font-size: 19px;
    width: 100%;
    max-width: 360px;
    min-width: 250px;
    color: white;
    background-color: rgb(244, 247, 247);
    border-radius: 5px;
    text-align: center;
    border: none;
    background-color: #3e5945;
    padding: 15px;
    &:hover {
        cursor: pointer;
        background-color: #1b261e;
    }
`;

export default function Register() {
    const { data, setData, post, errors } = useForm({
        username: "",
        email: "",
        password: "",
    });
    // const [userAuth, setUserAuth] = useState(true);
    // const [passAuth, setPassAuth] = useState(true);

    // this function get called directly after the user has fill the form with the valid data by he redirect him to page that meet his account type
    const handleForm = (e) => {
        e.preventDefault();
        post("Register", data);
    };

    return (
        <>
            <Container>
                <Form action="" onSubmit={(e) => handleForm(e)}>
                    <H1>مكتبتي</H1>
                    <InputContainer>
                        {" "}
                        <Label>اسم المستخدم</Label>
                        <Input
                            type="text"
                            id="username"
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                        />
                        {errors.username && (
                            <span
                                style={{
                                    // display: userAuth ? "none" : "block",
                                    backgroundColor: "orangered",
                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    fontSize: "14px",
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    style={{ marginLeft: "7px" }}
                                />
                                <p style={{ display: "inline" }}>
                                    اسم المستخدم خطا المرجو المحاولة مرة اخرى
                                </p>
                            </span>
                        )}
                    </InputContainer>

                    <InputContainer>
                        {" "}
                        <Label>البريد الإلكتروني</Label>
                        <Input
                            type="email"
                            id="email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <span
                                style={{
                                    // display: userAuth ? "none" : "block",
                                    backgroundColor: "orangered",
                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    fontSize: "14px",
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    style={{ marginLeft: "7px" }}
                                />
                                <p style={{ display: "inline" }}>
                                    اسم المستخدم خطا المرجو المحاولة مرة اخرى
                                </p>
                            </span>
                        )}
                    </InputContainer>

                    <InputContainer>
                        <Label>الرمز السري</Label>
                        <Input
                            type="password"
                            id="password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        {errors.password && (
                            <span
                                style={{
                                    // display: passAuth ? "none" : "block",
                                    backgroundColor: "orangered",
                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    fontSize: "14px",
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleExclamation}
                                    style={{ marginLeft: "7px" }}
                                />
                                <p style={{ display: "inline" }}>
                                    الرقم السري خطا المرجو المحاولة مرة اخرى
                                </p>
                            </span>
                        )}
                    </InputContainer>

                    <InputContainer>
                        <Label>تأكيد الرمز السري</Label>
                        <Input
                            type="password"
                            id="comfirm-password"
                            // onChange={handelChange}
                        />
                        {/* <span
                            style={{
                                // display: passAuth ? "none" : "block",
                                backgroundColor: "orangered",
                                color: "white",
                                borderRadius: "5px",
                                padding: "12px",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCircleExclamation}
                                style={{ marginLeft: "7px" }}
                            />
                            <p style={{ display: "inline" }}>
                                الرقم السري خطا المرجو المحاولة مرة اخرى
                            </p>
                        </span> */}
                    </InputContainer>

                    <SubmitBtn type="submit" value="تسجيل الدخول" />
                    <p>
                        لديك حساب؟{" "}
                        <Link href="/Login" style={{ color: "#73a580" }}>
                            سجل الدخول
                        </Link>
                    </p>
                </Form>
            </Container>
        </>
    );
}
