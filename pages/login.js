import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import LoginForm from "../components/team/loginForm";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const Login = () => {
    return (
        <MenuContextProvider>
          <SearchContextProvider>
            <Layout pageTitle="Sign in">
              <HeaderOne />
              <StickyHeader />
              <PageHeader
                title="Sign in"
                crumbTitle="Sign in"
              />
              <LoginForm />
              <BrandCarousel extraClass="client-carousel__has-border-top" />
              <Footer />
            </Layout>
          </SearchContextProvider>
        </MenuContextProvider>
      );
  };
  
  export default Login;