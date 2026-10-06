const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");

if (namaAsisten === null || namaAsisten.trim() === "") {

    document.write(`
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

        <div class="min-h-screen bg-[#194C84] flex items-center justify-center p-5">
            <div class="bg-[#F8DDDD] w-full max-w-xl rounded-xl shadow-lg p-8 text-center">
                <h2 class="text-xl font-bold text-[#CD0A0A]">
                    Akses Ditolak
                </h2>

                <p class="text-sm text-[#892222] mt-2">
                    Anda tidak memasukkan identitas Asisten.
                </p>
            </div>
        </div>
    `);

} else {

    function hitungRataRata(nilai) {
        let total = 0;

        for (let i = 0; i < nilai.length; i++) {
            total += nilai[i];
        }

        return total / nilai.length;
    }

    function tentukanStatus(rataRata) {
        if (rataRata >= 75) {
            return "Lulus";
        } else {
            return "Tidak Lulus";
        }
    }

    const hasilEvaluasi = dataPraktikan.map(function(praktikan) {

        const rataRata = hitungRataRata(praktikan.nilaiTugas);

        return {
            nama: praktikan.nama,
            nilaiTugas: praktikan.nilaiTugas,
            rataRata: rataRata,
            status: tentukanStatus(rataRata)
        };
    });

    document.write(`
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

        <div class="min-h-screen bg-[#194C84] flex justify-center py-10 px-5">

            <div class="w-full max-w-2xl bg-[#F8F7F4] rounded-xl shadow-lg overflow-hidden">

                <div class="px-7 pt-7 pb-5">

                    <h1 class="text-2xl font-bold text-slate-800">
                        Sistem Laporan Praktikum
                    </h1>

                    <p class="text-xs text-slate-400 mt-1">
                        Evaluasi kelulusan berbasis JavaScript murni
                    </p>

                </div>

                <div class="mx-7 border-t border-slate-100"></div>

                <div class="mx-7 mt-5 mb-4">

                    <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-md px-4 py-3">

                        <h2 class="text-sm font-semibold text-blue-700">
                            Selamat datang Asisten ${namaAsisten}!
                        </h2>

                        <p class="text-xs text-blue-500 mt-1">
                            Berikut adalah laporan hasil evaluasi praktikum.
                        </p>

                    </div>

                </div>

                <!-- Daftar Praktikan -->
                <div class="px-7 pb-7">
    `);

    hasilEvaluasi.forEach(function(data) {

        const statusStyle =
            data.status == "Lulus"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-600";

        document.write(`

            <div class="flex items-center justify-between
                        border border-slate-200 rounded-lg
                        px-4 py-4 mb-3
                        hover:shadow-sm transition">

                <div>
                    <h3 class="text-sm font-semibold text-slate-800">
                        ${data.nama}
                    </h3>

                    <p class="text-xs text-slate-500 mt-1">
                        Rata-rata: ${data.rataRata.toFixed(0)}
                    </p>
                </div>

                <span class="
                    ${statusStyle}
                    text-[10px]
                    font-semibold
                    px-3
                    py-1
                    rounded-full
                ">
                    ${data.status}
                </span>

            </div>

        `);
    });

    console.log("Hasil Evaluasi Praktikan:");
    console.log(hasilEvaluasi);
}

console.log(5 === "5");
