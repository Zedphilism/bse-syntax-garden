---
title: "SNMP"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# SNMP

SNMP (Simple Network Management Protocol) is an application-layer protocol that allows network administrators to query and configure network devices (routers, switches, servers) remotely, using a manager-agent model over UDP ports 161 (queries) and 162 (traps).

## Explanation

Managing a large network requires monitoring the status of hundreds of devices simultaneously — checking CPU load, interface error rates, traffic counters, and configuration. SNMP provides a standardised way to do this without logging into each device individually.

**Architecture:**
- **Network Management Station (NMS / Manager):** the administrator's workstation running a network management application. It sends SNMP queries to agents and collects responses.
- **Agent:** software running on each managed device (router, switch, printer). The agent maintains a local **Management Information Base (MIB)** — a structured database of variables describing the device's state (e.g., `ifInOctets` = bytes received on interface 1, `sysUpTime` = time since last reboot).
- **MIB (Management Information Base):** a hierarchical tree of named variables standardised by IANA. Each variable has an OID (Object Identifier), e.g., `1.3.6.1.2.1.1.3.0` = sysUpTime.

**Key SNMP operations:**
- `GetRequest`: manager requests the value of a specific MIB variable from an agent
- `GetNextRequest`: walk through the MIB tree
- `GetBulkRequest` (SNMPv2): retrieve a block of MIB data efficiently
- `SetRequest`: manager sets a MIB variable on an agent (e.g., disable an interface)
- `Trap`: agent proactively sends an alert to the manager without being asked (e.g., link went down, high temperature)

**Why UDP:** SNMP uses UDP because it is simple and low-overhead. If a query is lost, the management app retries. Using TCP would add connection overhead for each of the thousands of queries a management station sends per minute.

**Versions:** SNMPv1 (plain text, weak), SNMPv2c (community strings, GetBulk), SNMPv3 (authentication + encryption — the secure version used in production).

## Key Points

- SNMP: application-layer network management; UDP port 161 (queries), 162 (traps)
- Manager (NMS) queries agents on managed devices
- MIB: database of managed variables on each device; OIDs identify each variable
- Operations: Get, GetNext, GetBulk, Set, Trap
- Uses UDP: simple, low-overhead; management apps retry on loss
- SNMPv3: adds authentication and encryption

## Example

A network operations centre (NOC) uses a tool like Zabbix or SolarWinds. Every 60 seconds, it sends SNMP GetRequest to all 500 routers in the network for `ifInOctets` and `ifOutOctets` on all interfaces. It builds traffic graphs from the responses. If a router's fan fails, the router sends an SNMP Trap (alert) to the NOC's 162 port — immediately notifying the operator.

## See Also

- [[udp-connectionless-transport|UDP: Connectionless Transport]]
- [[network-security-threats|Network Security Threats]]
- [[rfc-768|RFC 768 — UDP Specification]]
