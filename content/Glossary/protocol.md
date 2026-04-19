---
title: "A Protocol Defines the Format and Rules for Messages Between Network Entities"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Protocol Defines the Format and Rules for Messages Between Network Entities

A network protocol is a set of rules governing the format, order, and meaning of messages exchanged between two or more communicating entities, and the actions taken when those messages are sent or received.

## Explanation

Protocols are the language of networks. Just as two people must speak the same language to communicate, two network entities must agree on a protocol — what messages look like, what order they are sent in, and what each message means. Without protocols, every manufacturer would build incompatible devices.

Protocols operate at every layer of the network stack. HTTP defines how a browser requests and a server delivers web pages. TCP defines how two hosts establish a reliable byte stream. IP defines how datagrams are addressed and forwarded across the Internet. Ethernet defines how frames are sent on a local-area network.

A protocol specification defines: the syntax of each message (bit fields, types, lengths), the semantics (what each field means), and the timing (when messages are sent, and how long to wait for a reply). The Internet's protocols are standardized by the IETF (Internet Engineering Task Force) and published as RFCs (Requests for Comments).

## Key Points

- Protocol: rules for format, order, and meaning of messages + actions on receipt
- Every layer of the network stack has its own protocol(s)
- Internet protocols standardized by IETF; published as RFCs
- Examples: HTTP (application), TCP/UDP (transport), IP (network), Ethernet (link)

## Example

When a browser sends an HTTP GET request, the message must start with `GET /path HTTP/1.1`, followed by header lines, then a blank line. The server must reply with a status line (`HTTP/1.1 200 OK`), then headers, then body. Both browser and server follow this protocol — without it, neither would understand the other.

## See Also

- [[network-protocols-defined|Protocols Define the Format and Order of Messages Exchanged Between Network Entities]]
- [[tcp|TCP Is the Internet's Reliable, Connection-Oriented Transport Protocol]]
- [[http|HTTP Is the Stateless Application-Layer Protocol of the Web]]
