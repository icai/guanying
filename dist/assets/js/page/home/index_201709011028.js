"use strict";!function n(e,r,t){function o(i,u){if(!r[i]){if(!e[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(a)return a(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var s=r[i]={exports:{}};e[i][0].call(s.exports,function(n){var r=e[i][1][n];return o(r||n)},s,s.exports,n,e,r,t)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(n,e,r){!function(n,e){var r=[],t=[],o=!1;({init:function(){this.eventHandler()},eventHandler:function(){n(document).on("click","#doplayers",function(){var a=n("#url").val();a.match("//")?e.location.href="/page/play/index?url="+a:n.ajax({url:"/api/search?value="+a,dataType:"json",beforeSend:function(){o=!0,n(".fa-search").hide(),n(".fa-spinner").show()},success:function(e){n(".fa-search").show(),n(".fa-spinner").hide(),o=!1,r=e.data.movie?e.data.movie:[],t=e.data.tv?e.data.tv:[]}})})}}).init()}(jQuery,window)},{}],2:[function(n,e,r){n("./components/search.js")},{"./components/search.js":1}]},{},[2]);