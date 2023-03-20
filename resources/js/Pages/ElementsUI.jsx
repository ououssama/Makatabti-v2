import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import styled from "styled-components";
// import logo from "../../../storage/app/public/logo.png";
// Style for header components
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    height: 70px;
    background-color: #8acb88;
    gap: 4em;
    position: relative;
`;

const Logo = styled.p`
    font-weight: 500;
    margin: 0;
    color: white;
    font-size: 28px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    width: max-content;
    gap: 7px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    background-color: #4eaa4b;
    color: white;
    font-family: "Cairo", sans-serif;
    padding: 10px 14px;

    &:hover {
        background-color: #418e3e;
    }
    &:active {
        background-color: #3a8038;
    }
    ${(props) =>
        props.admin &&
        css`
            @media only screen and (max-width: 600px) {
                padding: 14px;
                font-size: 25px;
                border-radius: 100%;
            }
        `};

    ${(props) =>
        props.second &&
        css`
            font-size: 18px;
        `};
`;

//  style for searchbar
const SearchBar = styled.div`
    width: 100%;
    max-width: 700px;
    position: relative;
    display: block;
    z-index: 20;
    @media only screen and (max-width: 768px) {
        display: "none";
        position: absolute;
        width: 100%;
        // min-width: 100%;
        padding: 0 15px;
        right: 0;
        box-sizing: border-box;
        flex: 1;
    }
`;

const InputSearch = styled.input`
    width: 100%;
    background-color: #69ad67;
    color: white;
    box-sizing: border-box;
    padding: 12px 50px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    font-size: 20px;
    outline: none;
    /* overflow: hidden; */
    ::placeholder {
        color: white;
        opacity: 0.7;
    }
    &:active {
        outline: none;
        border: none;
    }
`;

const SerachResulte = styled.div`
    position: absolute;
    top: 3.5em;
    width: 100%;
    padding: 15px;
    background: white;
    box-shadow: 0 10px 13px 0px #00000026;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    z-index: 10;
    @media only screen and (max-width: 768px) {
        width: calc(100% - 30px);
    }
`;

const QueryResult = styled.div`
    position: relative;
    color: #36bf31;
    z-index: 1;
    cursor: pointer;
    text-align: start;
    padding: 5px 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 10px;
    &:hover {
        border-radius: 5px;
        background-color: #0000000a;
    }
`;

const SearchButton = styled.div`
    background-color: #4eaa4b;
    border-radius: 10px;
    cursor: pointer;
    display: none;
    @media only screen and (max-width: 768px) {
        display: inherit;
    }
`;

function Header() {
    const [searchQuery, setSearchQuery] = useState();
    const SearchOpen = useRef();
    const [searchBarVisiblity, setSearchBarVisiblity] = useState(
        window.innerWidth >= 768 ? true : false
    );
    const isInsideSearchBar = useRef();
    const [listVisiblity, setListVisiblity] = useState(false);
    // const [menuToggel, setMenuToggel] = useState(false);
    const insideButton = useRef();

    useEffect(() => {
        window.onclick = (e) => {
            // check if user has clicked in the add button
            // if (
            //     e.target.parentElement === insideButton.current ||
            //     e.target === insideButton.current
            // ) {
            //     setMenuToggel(true);
            // } else {
            //     setMenuToggel(false);
            // }
            // check if user has clicked in the search icon
            if (window.innerWidth <= 775) {
                if (
                    e.target === SearchOpen.current ||
                    e.target === isInsideSearchBar.current
                ) {
                    setSearchBarVisiblity(true);
                } else {
                    setSearchBarVisiblity(false);
                }
            }
        };

        //  show result for users only if he search somthing
        if (searchQuery) {
            setListVisiblity(true);
        } else {
            setListVisiblity(false);
        }

        // check if the width of the window when it is resized to make the search bar responsive
        window.onresize = () => {
            if (window.innerWidth <= 768) {
                setSearchBarVisiblity(false);
            } else {
                setSearchBarVisiblity(true);
            }
        };
    });

    return (
        <HeaderContainer>
            <Link
                href="/"
                style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                }}
            >
                <img src='logo.png' width="50px" height="40px" alt="logo" />
                <Logo>مكتبتي</Logo>
            </Link>
            <SearchBar
                style={{ display: searchBarVisiblity ? "block" : "none" }}
            >
                <InputSearch
                    ref={isInsideSearchBar}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="search"
                    placeholder="البحت"
                />
                <FontAwesomeIcon
                    style={{
                        position: "absolute",
                        right: "20px",
                        fontSize: "20px",
                        top: "50%",
                        translate: "0 -50%",
                    }}
                    icon={faSearch}
                    color="white"
                />
                <SerachResulte
                    style={{ display: listVisiblity ? "block" : "none" }}
                >
                    <span style={{ opacity: ".5" }}>محتوى غير متوفر</span>
                </SerachResulte>
            </SearchBar>
            <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                <SearchButton>
                    <FontAwesomeIcon
                        ref={SearchOpen}
                        style={{ padding: "10px", fontSize: "18px" }}
                        icon={faSearch}
                        color="white"
                    />
                </SearchButton>
                <Link style={{ textDecoration: "none" }} href="/login">
                    <Button>تسجيل الدخول</Button>
                </Link>
            </div>
        </HeaderContainer>
    );
}

function Footer() {
    return <h1>footer</h1>;
}

export { Header, Footer };
