import React from 'react'
import { useT } from '@remix-run/react';

export default function Asd() {
    const transition = useTransition();

    const text =
        transition.state === "submitting"
        ? "Saving..."
        : transition.state === "loading"
        ? "Saved!"
        : "Go";

    return <button type="submit">{text}</button>;
}
