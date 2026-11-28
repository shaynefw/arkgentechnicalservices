// Public Fix Archive. ANONYMISED ONLY: no client names, addresses, phone numbers, serial numbers or passwords.
// Newest first. Fields: id, date (YYYY-MM-DD), title, device, os, category, symptoms[], cause, fix[], tags[]
window.KB_ENTRIES = [
  {
    id: "2026-11-27-surface-laptop-go-3-no-bootable-os",
    date: "2026-11-27",
    title: "Surface Laptop Go 3: \"Couldn't find a bootable operating system\" (SSD not detected)",
    device: "Microsoft Surface Laptop Go 3",
    os: "Windows 11 Home",
    category: "Boot / Storage",
    symptoms: [
      "Blue screen: \"Couldn't find a bootable operating system\" at every start",
      "Surface UEFI opens, but there is no Windows Boot Manager entry",
      "Hiren's BootCD PE (diskpart > list disk) shows only the USB stick, no internal disk",
      "Linux Mint live USB (lsblk) shows no NVMe drive, and dmesg shows no NVMe lines",
      "Same result after removing and reseating the SSD"
    ],
    cause: "The internal M.2 2230 NVMe SSD failed. No operating system (UEFI, Windows PE or Linux) could see it, and the SSD was not detected in a USB M.2 enclosure on another computer. A replacement SSD was detected in the same slot, which ruled out the slot and the board.",
    fix: [
      "Boot a Windows PE (Hiren's BootCD PE) or Linux live USB and check whether the internal drive appears. In Windows PE run diskpart, then list disk. In Linux run lsblk.",
      "Open the Surface and reseat the SSD. The Laptop Go 3 SSD is user-removable. Note that opening it may void the warranty.",
      "If the drive is still missing, fit a replacement M.2 2230 NVMe SSD. Check that the new drive appears in diskpart (list disk).",
      "Optional: test the old SSD in a USB M.2 2230 enclosure on another computer. If it is not detected there either, treat it as dead.",
      "Go to the Microsoft Surface recovery image page, sign in with a Microsoft account, and enter the Surface serial number. It lists the images for that exact model and edition. Download the newest one.",
      "Make a recovery USB of 32 GB or less, formatted FAT32. Unzip the whole recovery image onto it. This erases the USB.",
      "Turn the Surface off. Plug in the charger and the USB. Hold Volume-Down, press Power, and release Volume-Down at the logo.",
      "Choose Recover from a drive. If it asks for a recovery key, choose Skip this drive. Choose Just remove my files, then Recover.",
      "The Surface restarts into Windows setup. Leave setup for the owner.",
      "If a red bar with an open padlock shows at start, Secure Boot is off (for example after booting a Windows PE USB). Hold Volume-Up and press Power to open UEFI. Go to Security > Secure Boot > Change Configuration, choose Microsoft only, then Exit > Restart now."
    ],
    tags: [
      "surface", "surface laptop go 3", "no bootable operating system", "nvme", "m.2 2230", "ssd failed",
      "recovery image", "recovery usb", "secure boot", "red bar", "uefi", "diskpart", "hiren's bootcd", "windows 11"
    ]
  }
];
