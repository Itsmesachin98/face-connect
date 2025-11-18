import React from "react";

async function Meeting({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <div>My Post: {id}</div>;
}

export default Meeting;
