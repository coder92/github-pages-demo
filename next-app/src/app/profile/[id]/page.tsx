"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function UserProfilePage({params}: any) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-yellow-600">UserProfilePage {params.id}</h1>
            <hr />
        </div>
    );
}
