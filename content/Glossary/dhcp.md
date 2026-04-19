---
title: "DHCP Automatically Configures a Host's IP Address When It Joins a Network"
date: 2026-04-19
tags: [glossary, networking, scsr2213]
---

# DHCP Automatically Configures a Host's IP Address When It Joins a Network

DHCP (Dynamic Host Configuration Protocol) is an application-layer protocol that automatically assigns an IP address, subnet mask, default gateway, and DNS server address to a host when it connects to a network, using a four-step broadcast exchange over UDP ports 67/68.

## Explanation

Without DHCP, every device would need its IP address manually configured — impractical for large networks or for mobile devices that frequently change networks. DHCP automates this by maintaining a pool of available IP addresses and leasing one to each device that requests it.

The four-step DORA process: (1) **Discover** — client broadcasts to 255.255.255.255; (2) **Offer** — server proposes an IP address; (3) **Request** — client broadcasts its acceptance; (4) **ACK** — server confirms the lease. All steps use broadcast because the client has no IP address yet.

DHCP leases are temporary (configurable: minutes to days). Clients renew their lease before it expires; if they leave the network without renewing, the address returns to the pool for reassignment.

DHCP provides not just an IP address but a complete network configuration: subnet mask (to determine which addresses are local), default gateway (the router for off-subnet traffic), and DNS server address (to resolve hostnames).

## Key Points

- DHCP: automatically assigns IP config via 4-step DORA (Discover, Offer, Request, ACK)
- UDP: client port 68, server port 67; uses broadcast (255.255.255.255)
- Provides: IP address, subnet mask, default gateway, DNS server, lease time
- Leased addresses: temporary; client must renew or release
- DHCP relay agent: forwards broadcasts to a DHCP server on another subnet

## Example

Laptop connects to a new Wi-Fi network: (1) broadcasts DHCP Discover; (2) router offers `192.168.5.47/24`, gateway `192.168.5.1`, DNS `8.8.8.8`, lease 24 hours; (3) laptop accepts with Request; (4) router confirms with ACK. Laptop is fully configured in < 100 ms without any user input.

## See Also

- [[dhcp-dynamic-host-configuration|DHCP Automatically Assigns IP Addresses to Hosts on a Network]]
- [[ip-address|An IP Address Is a 32-Bit (IPv4) or 128-Bit (IPv6) Number Identifying a Network Interface]]
- [[nat|NAT Allows Multiple Private Hosts to Share a Single Public IP Address]]
