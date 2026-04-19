---
title: "Multiplexing"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# Multiplexing

Multiplexing is the transport-layer function of gathering data from multiple application sockets, tagging each chunk with the source and destination port numbers, and handing the resulting segments to the network layer for delivery.

## Explanation

A host runs many applications simultaneously — a browser, an email client, a game, a download manager. All of these share the same IP address and the same network link. Multiplexing is the mechanism by which the transport layer combines data from all these different application sockets into a single outgoing stream without mixing them up.

Each segment or datagram produced by multiplexing carries a source port (identifying which socket on the sender produced the data) and a destination port (identifying which socket on the receiver should receive it). The network layer (IP) then routes the segment based on the IP address — it does not know or care about port numbers.

Multiplexing is analogous to a post office: many senders (applications) hand their letters (data) to the post office (transport layer), which addresses each envelope (adds port numbers) and sends it through the postal system (network layer).

Both TCP and UDP perform multiplexing. The difference is in how the receiving side demultiplexes: UDP uses a 2-tuple (dst IP, dst port); TCP uses a 4-tuple (src IP, src port, dst IP, dst port).

## Key Points

- Multiplexing: sender-side; combines data from multiple sockets into segments
- Adds source port + destination port to each segment
- Performed by both TCP and UDP transport layers
- Network layer (IP) then routes by IP address, ignoring ports
- Counterpart: demultiplexing (receiver side)

## Example

A laptop simultaneously runs Chrome (port 54001 → server:443), Spotify (port 54002 → server:4070), and a game (port 54003 → game-server:27015). The transport layer multiplexes all three: each is tagged with its source port and destination port before being handed to IP for routing.

## See Also

- [[demultiplexing|Demultiplexing]]
- [[multiplexing-and-demultiplexing|Multiplexing and Demultiplexing]]
- [[port-number|Port Number]]
- [[socket|Socket]]
