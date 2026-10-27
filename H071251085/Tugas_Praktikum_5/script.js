const API_URL = "https://jsonplaceholder.typicode.com";

const daftarAnggota = document.getElementById("daftarAnggota");
const statusAnggota = document.getElementById("statusAnggota");
const judulTugas = document.getElementById("judulTugas");
const progres = document.getElementById("progres");
const progressBar = document.getElementById("progressBar");
const persentaseProgres = document.getElementById("persentaseProgres");
const wadahProgres = document.getElementById("wadahProgres");
const statusTugas = document.getElementById("statusTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pencarian = document.getElementById("pencarian");
const formTugas = document.getElementById("formTugas");
const judulBaru = document.getElementById("judulBaru");
const tombolSimpan = document.getElementById("tombolSimpan");
const pesanForm = document.getElementById("pesanForm");
const notifikasi = document.getElementById("notifikasi");
const pesanPencarian = document.getElementById("pesanPencarian");

let anggotaTerpilih = null;
let daftarDataTugas = [];
let elemenAnggotaAktif = null;
let waktuNotifikasi;

async function ambilAnggota() {
    statusAnggota.textContent = "Memuat anggota...";
    daftarAnggota.textContent = "";

    try {
        const respons = await fetch(`${API_URL}/users`);

        if (!respons.ok) {
            throw new Error("Gagal mengambil data anggota.");
        }

        const anggota = await respons.json();

        statusAnggota.textContent = "";

        anggota.forEach((orang) => {
            const tombol = document.createElement("button");

            tombol.textContent = orang.name;
            tombol.className =
                "w-full text-left p-3 rounded-lg border " +
                "hover:bg-red-50 transition";

            tombol.addEventListener("click", () => {
                pilihAnggota(orang, tombol);
            });

            daftarAnggota.appendChild(tombol);
        });

        if (anggota.length === 0) {
            statusAnggota.textContent = "Tidak ada anggota.";
        }
    } catch (error) {
        statusAnggota.textContent = error.message;
        statusAnggota.className = "text-red-600 mb-3";
    }
}

async function pilihAnggota(anggota, tombol) {
    anggotaTerpilih = anggota;
    elemenAnggotaAktif = tombol;

    const semuaTombol = daftarAnggota.querySelectorAll("button");

    semuaTombol.forEach((item) => {
        item.classList.remove(
            "bg-blue-600",
            "text-white",
            "border-blue-600"
        );
    });

    tombol.classList.add(
        "bg-blue-600",
        "text-white",
        "border-blue-600"
    );

    judulTugas.textContent = `Tugas ${anggota.name}`;
    progres.textContent = "";
    statusTugas.textContent = "Memuat tugas...";
    statusTugas.className = "text-gray-500 mb-3";

    daftarTugas.textContent = "";
    daftarDataTugas = [];
    pesanPencarian.classList.add("hidden");
    pesanForm.textContent = "";
    notifikasi.classList.add("hidden");

    try {
        const respons = await fetch(
            `${API_URL}/todos?userId=${anggota.id}`
        );

        if (!respons.ok) {
            throw new Error("Gagal mengambil data tugas.");
        }

        const tugas = await respons.json();

        if (anggotaTerpilih.id !== anggota.id) {
            return;
        }

        daftarDataTugas = tugas.map((item) => ({
            id: item.id,
            title: item.title,
            completed: item.completed
        }));

        statusTugas.textContent = "";
        tampilkanTugas();
        perbaruiProgres();
    } catch (error) {
        if (anggotaTerpilih.id === anggota.id) {
            statusTugas.textContent = error.message;
            statusTugas.className = "text-red-600 mb-3";
        }
    }
}

function perbaruiProgres() {
    const total = daftarDataTugas.length;
    const selesai = daftarDataTugas.filter(
        (tugas) => tugas.completed
    ).length;
    const belum = total - selesai;

    const persentase = total === 0
        ? 0
        : Math.round((selesai / total) * 100);

    progres.textContent = `${selesai} dari ${total} tugas selesai dan ${belum} belum selesai`;
    progressBar.style.width = `${persentase}%`;
    persentaseProgres.textContent = `${persentase}%`;
    wadahProgres.setAttribute("aria-valuenow", String(persentase));
}

function tampilkanTugas() {
    daftarTugas.textContent = "";

    const kataKunci = pencarian.value.trim().toLowerCase();

    const tugasCocok = daftarDataTugas.filter((tugas) =>
        tugas.title.toLowerCase().includes(kataKunci)
    );

    pesanPencarian.classList.toggle(
        "hidden",
        tugasCocok.length !== 0 || daftarDataTugas.length === 0
    );

    tugasCocok.forEach((tugas) => {
        const baris = document.createElement("div");

        baris.className =
            "flex flex-col sm:flex-row sm:items-center " +
            "justify-between gap-3 border rounded-lg p-3";

        const judul = document.createElement("span");
        judul.textContent = tugas.title;
        judul.className = "flex-1 break-words";

        if (tugas.completed) {
            judul.classList.add("line-through", "text-gray-400");
        }

        const tombolAksi = document.createElement("div");
        tombolAksi.className = "flex gap-2 flex-wrap";

        if (!tugas.completed) {
            const tombolSelesai = document.createElement("button");

            tombolSelesai.textContent = "Tandai selesai";
            tombolSelesai.className =
                "bg-blue-600 text-white px-3 py-2 rounded-lg " +
                "hover:bg-blue-700 text-sm";

            tombolSelesai.addEventListener("click", () => {
                tugas.completed = true;
                tampilkanTugas();
                perbaruiProgres();
            });

            tombolAksi.appendChild(tombolSelesai);
        }

        const tombolHapus = document.createElement("button");

        tombolHapus.textContent = "Hapus";
        tombolHapus.className =
            "bg-red-600 text-white px-3 py-2 rounded-lg " +
            "hover:bg-red-700 text-sm";

        tombolHapus.addEventListener("click", () => {
            daftarDataTugas = daftarDataTugas.filter(
                (item) => item !== tugas
            );

            tampilkanTugas();
            perbaruiProgres();
        });

        tombolAksi.appendChild(tombolHapus);

        baris.appendChild(judul);
        baris.appendChild(tombolAksi);
        daftarTugas.appendChild(baris);
    });
}

pencarian.addEventListener("input", () => {
    tampilkanTugas();
});

function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sudahAda = daftarDataTugas.some(
                (tugas) =>
                    tugas.title.toLowerCase() ===
                    judul.toLowerCase()
            );

            if (sudahAda) {
                reject(
                    new Error("Tugas dengan judul tersebut sudah ada.")
                );
            } else {
                resolve({
                    title: judul,
                    completed: false
                });
            }
        }, 1000);
    });
}

function tampilkanNotifikasi(pesan) {
    clearTimeout(waktuNotifikasi);

    notifikasi.textContent = pesan;
    notifikasi.classList.remove("hidden");

    waktuNotifikasi = setTimeout(() => {
        notifikasi.classList.add("hidden");
    }, 5000);
}

formTugas.addEventListener("submit", async (event) => {
    event.preventDefault();

    pesanForm.textContent = "";
    pesanForm.className = "mt-2 text-sm";

    if (!anggotaTerpilih) {
        pesanForm.textContent = "Pilih anggota terlebih dahulu.";
        pesanForm.classList.add("text-red-600");
        return;
    }

    const judul = judulBaru.value.trim();

    if (judul.length < 8) {
        pesanForm.textContent =
            "Judul harus memiliki minimal 8 karakter.";
        pesanForm.classList.add("text-red-600");
        return;
    }

    tombolSimpan.disabled = true;
    tombolSimpan.textContent = "Menyimpan...";
    tombolSimpan.classList.add("opacity-60", "cursor-not-allowed");

    try {
        const tugasBaru = await simpanTugas(judul);

        daftarDataTugas.push(tugasBaru);

        judulBaru.value = "";
        tampilkanTugas();
        perbaruiProgres();

        pesanForm.textContent = "";
        tampilkanNotifikasi("Tugas berhasil ditambahkan.");
    } catch (error) {
        pesanForm.textContent = error.message;
        pesanForm.classList.add("text-red-600");
    } finally {
        tombolSimpan.textContent = "Simpan";
        tombolSimpan.disabled = false;
        tombolSimpan.classList.remove(
            "opacity-60",
            "cursor-not-allowed"
        );
    }
});

ambilAnggota();