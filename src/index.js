
function submitVal() {
  let val = document.getElementById("input1").value;
  localStorage.setItem("val", val);
  let li = "<li>" + val + "</li>";
  // check if the input value is in the tags array
  if (tags.includes(val)) {
    document.getElementById("list").insertAdjacentHTML("beforeend", li);
  }
  document.getElementById("input1").value = "";
}

// See tags.js file for a comparison of the tags in the original list, the W3 list, and the MDN list
const tagsW3 = ["<!--...-->",	"<!DOCTYPE>",	"<a>",	"<abbr>",	"<acronym>",	"<address>",	"<applet>",	"<area>",	"<article>",	"<aside>",	"<audio>",	"<b>",	"<base>",	"<basefont>",	"<bdi>",	"<bdo>",	"<big>",	"<blockquote>",	"<body>", "<br>", "<button>",	"<canvas>",	"<caption>",	"<center>",	"<cite>",	"<code>",	"<col>",	"<colgroup>",	"<data>",	"<datalist>",	"<dd>",	"<del>",	"<details>",	"<dfn>",	"<dialog>",	"<dir>",	"<div>",	"<dl>",	"<dt>",	"<em>",	"<embed>",	"<fieldset>",	"<figcaption>",	"<figure>",	"<font>",	"<footer>",	"<form>",	"<frame>",	"<frameset>",	"<h1>",	"<h2>",	"<h3>",	"<h4>",	"<h5>",	"<h6>",	"<head>",	"<header>",	"<hr>",	"<html>",	"<i>",	"<iframe>",	"<img>",	"<input>",	"<ins>",	"<kbd>",	"<label>",	"<legend>",	"<li>",	"<link>",	"<main>",	"<map>",	"<mark>",	"<meta>",	"<meter>",	"<nav>",	"<noframes>",	"<noscript>",	"<object>",	"<ol>",	"<optgroup>",	"<option>",	"<output>",	"<p>",	"<param>",	"<picture>",	"<pre>",	"<progress>",	"<q>",	"<rp>",	"<rt>",	"<ruby>",	"<s>",	"<samp>",	"<script>",	"<section>",	"<select>",	"<small>",	"<source>",	"<span>",	"<strike>",	"<strong>",	"<style>",	"<sub>",	"<summary>",	"<sup>",	"<svg>",	"<table>",	"<tbody>",	"<td>",	"<template>",	"<textarea>",	"<tfoot>",	"<th>",	"<thead>",	"<time>",	"<title>",	"<tr>",	"<track>",	"<tt>",	"<u>",	"<ul>",	"<var>", "<video>",	"<wbr>"];

// Remove the < and > from the tags
const tags = tagsW3.map(tag => tag.replace(/[<|>]/g, ""));
