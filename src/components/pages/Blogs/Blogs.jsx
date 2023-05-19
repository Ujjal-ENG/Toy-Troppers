/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable new-cap */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-indent */
// /* eslint-disable react/jsx-indent */

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

function generatePDF(data) {
    const doc = new jsPDF();

    const tableColumn = ['ID', 'Author', 'Question', 'Answer'];
    const tableRows = [];

    data.forEach((blogPost) => {
        const { id, author, question, answer } = blogPost;
        const blogPostData = [id, author, question, answer];
        tableRows.push(blogPostData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save('blog_posts.pdf');
}

function Blogs() {
    const loader = useLoaderData();
    const downloadPDF = () => {
        generatePDF(loader?.blogsData[0]?.questions);
    };

    return (
        <div className="my-container">
            {loader?.blogsData[0]?.questions === 0 && <span className="text-red-500">Error occurred while fetching data.</span>}
            <div className="flex justify-between items-center">
                <h1 className="hover-stroke text-3xl md:text-5xl font-bold" data-text="Blogs">
                    Blogs
                </h1>
                <button className="btn hidden md:block btn-wide btn-primary" type="button" onClick={downloadPDF}>
                    Download as PDF
                </button>
                <button className="btn md:hidden block btn-sm btn-primary" type="button" onClick={downloadPDF}>
                    Download as PDF
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">{loader && loader?.blogsData[0]?.questions.map((blog, idx) => <BlogCard key={idx} data={blog} />)}</div>
        </div>
    );
}

export default Blogs;
