// Copied and pasted from W3/MDN into an Excel spreadsheet
// Used the following formula to generate the tagsW3 and tagsMDN arrays:
// CHAR(34) & Excell cell address for tag element & CHAR(34) & ","

// Source: https://www.w3schools.com/tags/default.asp
const tagsW3 = ["<!--...-->",	"<!DOCTYPE>",	"<a>",	"<abbr>",	"<acronym>",	"<address>",	"<applet>",	"<area>",	"<article>",	"<aside>",	"<audio>",	"<b>",	"<base>",	"<basefont>",	"<bdi>",	"<bdo>",	"<big>",	"<blockquote>",	"<body>", "<br>", "<button>",	"<canvas>",	"<caption>",	"<center>",	"<cite>",	"<code>",	"<col>",	"<colgroup>",	"<data>",	"<datalist>",	"<dd>",	"<del>",	"<details>",	"<dfn>",	"<dialog>",	"<dir>",	"<div>",	"<dl>",	"<dt>",	"<em>",	"<embed>",	"<fieldset>",	"<figcaption>",	"<figure>",	"<font>",	"<footer>",	"<form>",	"<frame>",	"<frameset>",	"<h1>",	"<h2>",	"<h3>",	"<h4>",	"<h5>",	"<h6>",	"<head>",	"<header>",	"<hr>",	"<html>",	"<i>",	"<iframe>",	"<img>",	"<input>",	"<ins>",	"<kbd>",	"<label>",	"<legend>",	"<li>",	"<link>",	"<main>",	"<map>",	"<mark>",	"<meta>",	"<meter>",	"<nav>",	"<noframes>",	"<noscript>",	"<object>",	"<ol>",	"<optgroup>",	"<option>",	"<output>",	"<p>",	"<param>",	"<picture>",	"<pre>",	"<progress>",	"<q>",	"<rp>",	"<rt>",	"<ruby>",	"<s>",	"<samp>",	"<script>",	"<section>",	"<select>",	"<small>",	"<source>",	"<span>",	"<strike>",	"<strong>",	"<style>",	"<sub>",	"<summary>",	"<sup>",	"<svg>",	"<table>",	"<tbody>",	"<td>",	"<template>",	"<textarea>",	"<tfoot>",	"<th>",	"<thead>",	"<time>",	"<title>",	"<tr>",	"<track>",	"<tt>",	"<u>",	"<ul>",	"<var>", "<video>",	"<wbr>"];

// Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const tagsMDN = ["<a>",	"<abbr>",	"<acronym>",	"<address>",	"<area>",	"<article>",	"<aside>",	"<audio>",	"<b>",	"<base>",	"<bdi>",	"<bdo>",	"<big>",	"<blockquote>",	"<body>",	"<br>",	"<button>",	"<canvas>",	"<caption>",	"<center>",	"<cite>",	"<code>",	"<col>",	"<colgroup>",	"<data>",	"<datalist>",	"<dd>",	"<del>",	"<details>",	"<dfn>",	"<dialog>",	"<dir>",	"<div>",	"<dl>",	"<dt>",	"<em>",	"<embed>",	"<fieldset>",	"<figcaption>",	"<figure>",	"<font>",	"<footer>",	"<form>",	"<frame>",	"<frameset>",	"<h1>",	"<head>",	"<header>",	"<hgroup>",	"<hr>",	"<html>",	"<i>",	"<iframe>",	"<image>Non-standard",	"<img>",	"<input>",	"<ins>",	"<kbd>",	"<label>",	"<legend>",	"<li>",	"<link>",	"<main>",	"<map>",	"<mark>",	"<marquee>",	"<menu>",	"<menuitem>Non-standard",	"<meta>",	"<meter>",	"<nav>",	"<nobr>",	"<noembed>",	"<noframes>",	"<noscript>",	"<object>",	"<ol>",	"<optgroup>",	"<option>",	"<output>",	"<p>",	"<param>",	"<picture>",	"<plaintext>",	"<portal>Experimental",	"<pre>",	"<progress>",	"<q>",	"<rb>",	"<rp>",	"<rt>",	"<rtc>",	"<ruby>",	"<s>",	"<samp>",	"<script>",	"<search>",	"<section>",	"<select>",	"<slot>",	"<small>",	"<source>",	"<span>",	"<strike>",	"<strong>",	"<style>",	"<sub>",	"<summary>",	"<sup>",	"<table>",	"<tbody>",	"<td>",	"<template>",	"<textarea>",	"<tfoot>",	"<th>",	"<thead>",	"<time>",	"<title>",	"<tr>",	"<track>",	"<tt>",	"<u>",	"<ul>",	"<var>",	"<video>",	"<wbr>",	"<xmp>"]


const tagsOriginal = ["<!-->","<!DOCTYPE>", "<a>","<abbr>","<address>","<area>","<articel>","<aside>","<articele>","<aside>","<audio>","<b>","<base>","<bdi>","bdo","blockquote","<body>","<br>","<button>","<canvas>","<capton>","<cite>","<code>","<col>","<colgroup>","<data>","<datalist>","<dd>","<del>","<details>","<dfn>","<dialog>","<div>","<dl>","<dt>","<em>","<embed>","<fieldset>","<figcaption>","<figure>","<footer>","<form>","<h1>","<h2>","<h3>","<h4>","<h5>","<h6>","<head>","<header>","<hr>","<html>","<i>","<iframe>","<img>","<input>","<ins>","<kbd>","<label>","<legend>","<li>","<link>","<main>","<map>","<mark>","<meta>","<meter>","<nav>","<noscript>","<object>","<ol>","<optgroup>","<option>","<output>","<p>","<param>","<picture>","<pre>","<progress>","<q>","<rp>","<rt>","<ruby","<s>","<samp>","<script>","<section>","<select>","<small>","<source>","<span>","<strong>","<style>","<sub>","<summary>","<svg>","<table>","<tbody>","<td>","<template>","<textarea>","<tfoot>","<th>","<thead>","<time>","<tr>","<track>","<u>","<ul>","<var>","<video>","<wbr>"]


// COMPARE Original and W3 TAGS
let uniqueToOriginal = tagsOriginal.filter(tag => !tagsW3.includes(tag));
console.log("Tags in Original list but not in W3 list:", uniqueToOriginal);

let uniqueToW3 = tagsW3.filter(tag => !tagsOriginal.includes(tag));
console.log("Tags in W3 list but not in Original list:", uniqueToW3);

// Tags in Original list but not in W3 list: [
//     '<!-->',
//     '<articel>',
//     '<articele>',
//     'bdo',
//     'blockquote',
//     '<capton>',
//     '<ruby'
//   ]
//   Tags in W3 list but not in Original list: [
//     '<!--...-->', '<acronym>',
//     '<applet>',   '<article>',
//     '<basefont>', '<bdo>',
//     '<big>',      '<blockquote>',
//     '<caption>',  '<center>',
//     '<dir>',      '<font>',
//     '<frame>',    '<frameset>',
//     '<noframes>', '<ruby>',
//     '<strike>',   '<sup>',
//     '<title>',    '<tt>'
//   ]



// COMPARE W3 and MDN TAGS
// let uniqueToW3 = tagsW3.filter(tag => !tagsMDN.includes(tag));
// console.log("Tags in W3 list but not in MDN list:", uniqueToW3);

// let uniqueToMDN = tagsMDN.filter(tag => !tagsW3.includes(tag));
// console.log("Tags in MDN list but not in W3 list:", uniqueToMDN);

// Tags in W3 list but not in MDN list: [
//   '<!--...-->', '<!DOCTYPE>',
//   '<applet>',   '<basefont>',
//   '<h2>',       '<h3>',
//   '<h4>',       '<h5>',
//   '<h6>',       '<svg>'
// ]
// Tags in MDN list but not in W3 list: [
//   '<hgroup>',
//   '<image>Non-standard',
//   '<marquee>',
//   '<menu>',
//   '<menuitem>Non-standard',
//   '<nobr>',
//   '<noembed>',
//   '<plaintext>',
//   '<portal>Experimental',
//   '<rb>',
//   '<rtc>',
//   '<search>',
//   '<slot>',
//   '<xmp>'
// ]