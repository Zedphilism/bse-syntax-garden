---
title: "Glossary"
date: 2026-04-18
tags: [hub, glossary]
---

# Glossary

Universal definitions that span all semesters and subjects.

> Add entries as atomic notes: one term per file, linked back here.

## Signals and Encoding

- [[analog-signal|Analog Signal]] — continuously varying physical quantity with infinite possible values
- [[digital-signal|Digital Signal]] — information represented using only two discrete voltage levels
- [[bit|Bit]] — smallest unit of digital information; one binary choice (0 or 1)
- [[active-high|Active-High]] — signal asserted when at logic HIGH (1)
- [[active-low|Active-Low]] — signal asserted when at logic LOW (0); fail-safe on open-circuit faults
- [[duty-cycle|Duty Cycle]] — fraction of a period during which a signal is in its active state
- [[timing-diagram|Timing Diagram]] — shows how multiple digital signals change state over time
- [[adc|ADC]] — converts a continuous analog signal to a sequence of digital values
- [[dac|DAC]] — converts a sequence of digital values back into a continuous analog signal
- [[nyquist-theorem|Nyquist Theorem]] — sampling rate must be at least twice the signal bandwidth

## Number Systems

- [[radix|Radix]] — number of unique digits in a positional number system (the base)
- [[binary|Binary]] — base-2 number system used natively by all digital hardware
- [[hexadecimal|Hexadecimal]] — base-16; compact shorthand for binary using groups of 4 bits
- [[octal|Octal]] — base-8; compact shorthand for binary using groups of 3 bits

## Data Codes

- [[bcd|BCD]] — encodes each decimal digit as a separate 4-bit binary group
- [[gray-code|Gray Code]] — binary encoding where consecutive values differ by exactly one bit
- [[parity-bit|Parity Bit]] — extra bit added to enable single-bit error detection
- [[ascii|ASCII]] — 7-bit standard assigning a unique binary code to each printable character

## Signed Arithmetic

- [[twos-complement|Two's Complement]] — standard binary encoding for signed integers in all modern hardware
- [[overflow|Overflow]] — arithmetic result exceeds the range of the fixed bit width

## Logic Gates

- [[logic-gate|Logic Gate]] — circuit implementing a single Boolean operation on binary inputs
- [[truth-table|Truth Table]] — lists every possible input combination and the output each produces
- [[and-gate|AND Gate]] — outputs HIGH only when every input is HIGH
- [[or-gate|OR Gate]] — outputs HIGH when at least one input is HIGH
- [[not-gate|NOT Gate]] — inverts its single input to the opposite logic level
- [[nand-gate|NAND Gate]] — universal gate; LOW only when all inputs are HIGH
- [[nor-gate|NOR Gate]] — universal gate; HIGH only when all inputs are LOW
- [[xor-gate|XOR Gate]] — outputs HIGH only when inputs differ
- [[xnor-gate|XNOR Gate]] — outputs HIGH only when inputs are equal

## Boolean Logic and Circuit Analysis

- [[boolean-algebra|Boolean Algebra]] — mathematical framework for analyzing and simplifying logic circuits
- [[demorgans-theorem|DeMorgan's Theorem]] — converts complement of AND/OR to equivalent gate form
- [[combinational-logic|Combinational Logic]] — outputs depend only on current inputs; no memory or clock
- [[propagation-delay|Propagation Delay]] — time a signal takes to pass through a logic gate
- [[critical-path|Critical Path]] — longest propagation delay path; sets maximum operating frequency

---

## Networking — Fundamentals

- [[protocol|Protocol]] — rules governing format, order, and meaning of messages between network entities
- [[packet|Packet]] — chunk of data with header + payload; routed independently through packet-switched networks
- [[datagram|Datagram]] — IP's network-layer PDU; carries src/dst IP addresses and is independently routed
- [[segment|Segment]] — TCP's transport-layer PDU; carries seq#, ACK#, and a slice of the byte stream
- [[encapsulation|Encapsulation]] — each layer wraps the payload from above with its own header as data descends the stack
- [[osi-model|OSI Model]] — 7-layer reference model: Physical, Data Link, Network, Transport, Session, Presentation, Application
- [[bandwidth|Bandwidth]] — link capacity in bps; maximum rate data can be transmitted on a link
- [[throughput|Throughput]] — actual data delivery rate achieved; ≤ bandwidth; bounded by the bottleneck link
- [[latency|Latency]] — total one-way delay: processing + queuing + transmission + propagation delay
- [[rtt|RTT]] — round-trip time; time from sending a packet to receiving its acknowledgement

## Networking — Transport Layer

- [[tcp|TCP]] — reliable, ordered, connection-oriented byte-stream transport protocol (IP proto=6)
- [[udp|UDP]] — connectionless, unreliable, low-overhead transport protocol (IP proto=17)
- [[connectionless|Connectionless]] — protocol with no handshake, no state, no teardown; each packet independent (e.g., UDP, IP)
- [[port-number|Port Number]] — 16-bit identifier for an application process on a host; 0–1023 are well-known ports
- [[socket|Socket]] — OS API (IP:port handle) providing an application's interface to the transport layer
- [[multiplexing|Multiplexing]] — sender-side: combines data from multiple sockets, tags each with src/dst port
- [[demultiplexing|Demultiplexing]] — receiver-side: routes each incoming segment to the correct socket using port numbers
- [[four-tuple|4-Tuple]] — (src IP, src port, dst IP, dst port) uniquely identifies a TCP connection
- [[ack|ACK]] — acknowledgement message; TCP's cumulative ACK specifies the next expected byte
- [[ack-nak|ACK and NAK]] — ACK = correct receipt confirmed; NAK = corrupted packet, please retransmit
- [[mss|MSS]] — Maximum Segment Size; max data bytes in one TCP segment; typically 1460 bytes on Ethernet
- [[flow-control|Flow Control]] — receiver-advertised rwnd limits sender to prevent receive-buffer overflow
- [[congestion-control|Congestion Control]] — cwnd-based mechanism that prevents senders from overloading the network

## Networking — Network Layer

- [[ip-address|IP Address]] — 32-bit (IPv4) or 128-bit (IPv6) number identifying a network interface
- [[subnet|Subnet]] — block of IP addresses sharing the same network prefix; direct communication without a router
- [[cidr|CIDR]] — Classless Inter-Domain Routing; variable-length /x prefixes replacing fixed Class A/B/C blocks
- [[router|Router]] — Layer-3 device that forwards IP datagrams between networks using a forwarding table
- [[forwarding-table|Forwarding Table]] — hardware data structure mapping destination prefixes to output ports via longest prefix match
- [[mtu|MTU]] — Maximum Transmission Unit; largest datagram a link can carry; Ethernet MTU = 1500 bytes
- [[ttl|TTL]] — Time to Live; 8-bit hop counter; prevents routing loops; traceroute exploits TTL expiry
- [[nat|NAT]] — Network Address Translation; maps many private IPs to one public IP using port numbers
- [[dhcp|DHCP]] — Dynamic Host Configuration Protocol; auto-assigns IP, mask, gateway, DNS via DORA broadcast
- [[icmp|ICMP]] — Internet Control Message Protocol; error reporting and diagnostics; basis of ping and traceroute

## Networking — Application Layer

- [[http|HTTP]] — HyperText Transfer Protocol; stateless client-server web protocol over TCP ports 80/443
- [[dns|DNS]] — Domain Name System; distributed hierarchy that maps hostnames to IP addresses
- [[smtp|SMTP]] — Simple Mail Transfer Protocol; pushes email between mail servers over TCP port 25
- [[snmp|SNMP]] — Simple Network Management Protocol; manager-agent model for querying devices; UDP 161/162

## Networking — Routing & Control

- [[autonomous-system|Autonomous System (AS)]] — network under single administrative control; identified by ASN; uses BGP externally

## Networking — Error Detection & Standards

- [[complement|Complement (1's and 2's)]] — 1's complement flips all bits; property X + ~X = 0xFFFF used in Internet checksum
- [[rfc-768|RFC 768]] — IETF document defining UDP; specifies 8-byte header, pseudo-header checksum, optional in IPv4

## Networking — Physical / Link Layer

- [[bitstream|Bitstream]] — serial sequence of 0s and 1s at the physical layer; all higher structure serialised
