import * as React from "react";
import { useHistory } from "react-router-dom";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IncomeCard from "../components/IncomeCard";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import UserStore from "../store/UserStore";

function Home() {
    let history = useHistory();

    React.useEffect(() => {
        if (!UserStore.avater.length === 0) {
            history.push("../");
        }
    });

    return (
        <Page title='Overview'>
            <Header tite='Overview' />
            <SimpleBar style={{ maxHeight: "80%", marginTop: 80 }}>
                <IncomeCard />
            </SimpleBar>
            <Footer />
        </Page>
    );
}

export default Home;
