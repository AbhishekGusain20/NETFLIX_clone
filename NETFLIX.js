/* =====================================================
   STREAMBOX - EDUCATIONAL STREAMING UI
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= ELEMENTS ================= */

    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");
    const closeSearch = document.getElementById("closeSearch");

    const demoBtn = document.getElementById("demoBtn");
    const infoModal = document.getElementById("infoModal");
    const modalClose = document.getElementById("modalClose");
    const modalOkay = document.getElementById("modalOkay");

    const watchHero = document.getElementById("watchHero");
    const moreInfo = document.getElementById("moreInfo");

    const closeNotice = document.getElementById("closeNotice");

    const movieCards = document.querySelectorAll(".movie-card");
    const playButtons = document.querySelectorAll(".play-small");


    /* ================= SEARCH ================= */

    if (searchBtn && searchBox && searchInput) {

        searchBtn.addEventListener("click", function () {

            searchBox.classList.toggle("active");

            if (searchBox.classList.contains("active")) {
                searchInput.focus();
            }

        });
    }


    if (closeSearch && searchBox && searchInput) {

        closeSearch.addEventListener("click", function () {

            searchBox.classList.remove("active");

            searchInput.value = "";

            showAllMovies();

        });
    }


    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchValue = searchInput.value
                .toLowerCase()
                .trim();

            movieCards.forEach(function (card) {

                const title = (
                    card.dataset.title || ""
                ).toLowerCase();

                const category = (
                    card.dataset.category || ""
                ).toLowerCase();

                if (
                    title.includes(searchValue) ||
                    category.includes(searchValue)
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });
    }


    function showAllMovies() {

        movieCards.forEach(function (card) {

            card.classList.remove("hidden");

        });

    }


    /* ================= MODAL ================= */

    function openModal() {

        if (!infoModal) {
            return;
        }

        infoModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    function closeModal() {

        if (!infoModal) {
            return;
        }

        infoModal.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (demoBtn) {
        demoBtn.addEventListener("click", openModal);
    }


    if (moreInfo) {
        moreInfo.addEventListener("click", openModal);
    }


    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }


    if (modalOkay) {
        modalOkay.addEventListener("click", closeModal);
    }


    if (infoModal) {

        infoModal.addEventListener("click", function (event) {

            if (event.target === infoModal) {

                closeModal();

            }

        });

    }


    /* ================= WATCH DEMO ================= */

    if (watchHero) {

        watchHero.addEventListener("click", function () {

            alert(
                "Demo Player\n\n" +
                "This is an educational frontend project.\n" +
                "No real video is being streamed."
            );

        });

    }


    /* ================= MOVIE CARDS ================= */

    movieCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const title =
                card.dataset.title || "Movie";

            alert(
                title +
                "\n\n" +
                "This is a frontend demonstration card."
            );

        });

    });


    /* ================= PLAY BUTTONS ================= */

    playButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            alert(
                "Demo Player\n\n" +
                "Video playback is disabled in this educational project."
            );

        });

    });


    /* ================= CLOSE NOTICE ================= */

    if (closeNotice) {

        closeNotice.addEventListener("click", function () {

            const notice =
                document.querySelector(".project-notice");

            if (notice) {

                notice.style.display = "none";

            }

        });

    }


    /* ================= ESC KEY ================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (searchBox) {
                searchBox.classList.remove("active");
            }

            closeModal();

        }

    });


    /* ================= NAVIGATION ================= */

    const navLinks =
        document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (searchBox) {

                searchBox.classList.remove("active");

            }

        });

    });


    /* ================= LOGO ================= */

    const logo =
        document.getElementById("logo");

    if (logo) {

        logo.addEventListener("click", function (event) {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= SUCCESS MESSAGE ================= */

    console.log(
        "StreamBox Educational Demo loaded successfully."
    );

});