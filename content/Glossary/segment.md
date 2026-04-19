---
title: "A Segment Is the Transport-Layer Unit Exchanged Between TCP Endpoints"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# A Segment Is the Transport-Layer Unit Exchanged Between TCP Endpoints

A TCP segment is the transport-layer packet: it consists of a TCP header (containing source/destination ports, sequence number, ACK number, flags, and receive window) and a data payload carved from the application's byte stream.

## Explanation

When the transport layer receives data from the application, it divides it into chunks no larger than the Maximum Segment Size (MSS) and wraps each chunk in a TCP header to form a segment. The header provides all the information TCP needs for reliable, ordered delivery: the sequence number identifies where this chunk sits in the byte stream; the ACK number acknowledges bytes received from the other direction; the receive window (rwnd) signals how much buffer space remains.

TCP segments are then handed to the IP layer, which wraps them in IP datagrams for forwarding. On the receiving side, TCP extracts the segments from incoming datagrams, uses the sequence numbers to reorder them if necessary, and delivers a continuous byte stream to the application.

The term "segment" is specific to TCP. UDP's transport-layer unit is called a **UDP datagram** and has a much simpler 8-byte header.

## Key Points

- TCP segment = TCP header (min 20 bytes) + application data
- MSS (Maximum Segment Size): maximum data bytes per segment; typically 1460 bytes on Ethernet
- Header fields: src port, dst port, seq#, ACK#, flags (SYN/ACK/FIN), rwnd, checksum
- UDP equivalent: UDP datagram (8-byte header, no reliability)

## Example

An application writes 3000 bytes. With MSS = 1460, TCP creates two segments: Segment 1 (seq=0, 1460 bytes), Segment 2 (seq=1460, 1460 bytes), and a third (seq=2920, 80 bytes). Each becomes the payload of an IP datagram and is forwarded independently to the receiver.

## See Also

- [[tcp-segment-structure|TCP Segment Header Carries Sequence Numbers, ACKs, and Control Flags]]
- [[datagram|A Datagram Is the Network-Layer Packet Forwarded by IP Routers]]
- [[mss|MSS Is the Maximum Bytes of Data TCP Puts in a Single Segment]]
