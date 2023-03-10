import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import VolunteerForm from "../components/team/volunteer-form";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const BecomeVolunteer = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Become a Volunteer || Azino || Charity React Next Template">
          <HeaderOne />
          <StickyHeader />
          <PageHeader
            title="Become a Volunteer"
            crumbTitle="Become Volunteer"
          />
          <VolunteerForm />
          <BrandCarousel extraClass="client-carousel__has-border-top" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BecomeVolunteer;
