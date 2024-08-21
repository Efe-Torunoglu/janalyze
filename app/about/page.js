'use client';
import Header from "@/components/Header";
import outputBox from "../../components/outputBox";
import React, { useState } from 'react';
import Link from 'next/link';
import OutputBox from "../../components/outputBox";

export default function About() {
    return (
        <body>

        <Header/>
        <div className="min-h-screen bg-gray-100 py-12  px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto overflow-hidden space-y-6">
                <h1 className="text-3xl font-bold mb-4">About Janalyze</h1>
                <OutputBox heading={"What is Janalyze?"} text={"Janalyze is a tool for upper beginner to advanced Japanese Learners."}/>
                <OutputBox heading={"How do I Use Janalyze?"} text={"Janalyze has three main Components."}/>
            </div>
        </div>
        </body>
    );
}