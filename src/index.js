function submitVal() {
  let val = document.getElementById("input1").value;
  localStorage.setItem("val", val);
  let li = "<li>" + val + "</li>";
  // check if the input value is in the tags array
  if (tags.includes(`<${val}>`)) {
    document.getElementById("list").insertAdjacentHTML("beforeend", li);
  }
  document.getElementById("input1").value = "";
}

const tags = ["<!-->","<!DOCTYPE>", "<a>","<abbr>","<address>","<area>","<articel>","<aside>","<articele>","<aside>","<audio>","<b>","<base>","<bdi>","bdo","blockquote","<body>","<br>","<button>","<canvas>","<capton>","<cite>","<code>","<col>","<colgroup>","<data>","<datalist>","<dd>","<del>","<details>","<dfn>","<dialog>","<div>","<dl>","<dt>","<em>","<embed>","<fieldset>","<figcaption>","<figure>","<footer>","<form>","<h1>","<h2>","<h3>","<h4>","<h5>","<h6>","<head>","<header>","<hr>","<html>","<i>","<iframe>","<img>","<input>","<ins>","<kbd>","<label>","<legend>","<li>","<link>","<main>","<map>","<mark>","<meta>","<meter>","<nav>","<noscript>","<object>","<ol>","<optgroup>","<option>","<output>","<p>","<param>","<picture>","<pre>","<progress>","<q>","<rp>","<rt>","<ruby","<s>","<samp>","<script>","<section>","<select>","<small>","<source>","<span>","<strong>","<style>","<sub>","<summary>","<svg>","<table>","<tbody>","<td>","<template>","<textarea>","<tfoot>","<th>","<thead>","<time>","<tr>","<track>","<u>","<ul>","<var>","<video>","<wbr>"]


