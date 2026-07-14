const API_URL = "https://dummyjson.com/products/search";
let params = {
    q: "",
    limit: 10,
    skip: 0,
    sortBy: "",
    order: "",
};

const productListTbl = document.getElementById("productList");
const totalCountEl = document.getElementById("totalCount");
const paginationEl = document.getElementById("pagination");

const renderTableSpinner = () => {
    productListTbl.innerHTML = `
    <tr class="">
        <td
            colspan="5"
            class="border border-gray-300 px-3 py-3 text-center"
        >
            <div
                class="inline-flex"
                role="status"
                aria-label="loading"
            >
                <svg
                    class="animate-spin size-6 shrink-0 text-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                    >
                        <path
                            d="M12 2.75V5.25"
                            opacity="0.15"
                        />
                        <path
                            d="M16.95 4.08L15.7 6.25"
                            opacity="0.22"
                        />
                        <path
                            d="M19.92 7.05L17.75 8.3"
                            opacity="0.32"
                        />
                        <path
                            d="M21.25 12H18.75"
                            opacity="0.42"
                        />
                        <path
                            d="M19.92 16.95L17.75 15.7"
                            opacity="0.54"
                        />
                        <path
                            d="M16.95 19.92L15.7 17.75"
                            opacity="0.66"
                        />
                        <path
                            d="M12 21.25V18.75"
                            opacity="0.78"
                        />
                        <path
                            d="M7.05 19.92L8.3 17.75"
                            opacity="0.9"
                        />
                        <path
                            d="M4.08 16.95L6.25 15.7"
                            opacity="1"
                        />
                        <path
                            d="M2.75 12H5.25"
                            opacity="0.86"
                        />
                        <path
                            d="M4.08 7.05L6.25 8.3"
                            opacity="0.7"
                        />
                        <path
                            d="M7.05 4.08L8.3 6.25"
                            opacity="0.5"
                        />
                    </g>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            <p class="text-center text-gray-500">
                Loading...
            </p>
        </td>
    </tr>
    `;
};

const renderProducts = (products) => {
    productListTbl.innerHTML = products
        .map((product) => {
            const { id, title, price, category, images } = product;
            return `
                    <tr class="bg-gray-200">
                        <td class="border border-gray-300 px-3 ">
                            ${title}
                        </td>
                        <td class="border border-gray-300 px-3 ">
                            ${price} USD
                        </td>
                        <td class="border border-gray-300 px-3 ">
                            ${category}
                        </td>
                        <td class="border border-gray-300 px-3 flex flex-wrap gap-2">
                            ${images.map((image) => `<img src="${image}" alt="${title}" class="w-12 h-12 object-cover rounded" />`).join("")}
                        </td>
                        <td class="border border-gray-300 px-3 ">
                            <button
                                class="border border-gray-500 bg-gray-100 px-3 py-1 hover:bg-gray-200"
                            >
                                Detail
                            </button>
                        </td>
                    </tr>
                `;
        })
        .join("");
};

const renderPagination = (total, limit, currentPage = 1) => {
    const totalPages = Math.ceil(total / limit);
    const maxVisiblePages = 5;

    let html = "";

    // Nút Prev
    html += `
        <button
            class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            ${currentPage === 1 ? "disabled" : ""}
            data-page="${currentPage - 1}"
        >
            Prev
        </button>
    `;

    // Logic hiển thị số trang
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
        const halfVisible = Math.floor(maxVisiblePages / 2);

        if (currentPage <= halfVisible) {
            // Gần đầu
            endPage = maxVisiblePages;
        } else if (currentPage >= totalPages - halfVisible) {
            // Gần cuối
            startPage = totalPages - maxVisiblePages + 1;
        } else {
            // Ở giữa
            startPage = currentPage - halfVisible;
            endPage = currentPage + halfVisible;
        }
    }

    // Nút trang đầu + dấu ...
    if (startPage > 1) {
        html += `
            <button
                data-page="1"
                class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100"
            >
                1
            </button>
        `;
        if (startPage > 2) {
            html += `<span class="h-9 min-w-9 flex items-center justify-center">...</span>`;
        }
    }

    // Các trang ở giữa
    for (let page = startPage; page <= endPage; page++) {
        html += `
            <button
                data-page="${page}"
                class="
                    h-9 min-w-9 px-3 border rounded
                    ${
                        page === currentPage
                            ? "bg-teal-600 text-white"
                            : "bg-white hover:bg-gray-100"
                    }
                "
            >
                ${page}
            </button>
        `;
    }

    // Dấu ... + nút trang cuối
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span class="h-9 min-w-9 flex items-center justify-center">...</span>`;
        }
        html += `
            <button
                data-page="${totalPages}"
                class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100"
            >
                ${totalPages}
            </button>
        `;
    }

    // Nút Next
    html += `
        <button
            class="h-9 min-w-9 px-3 border rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            ${currentPage === totalPages ? "disabled" : ""}
            data-page="${currentPage + 1}"
        >
            Next
        </button>
    `;

    paginationEl.innerHTML = html;
};

const fetchProducts = async () => {
    try {
        renderTableSpinner();
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_URL}?${query}`);
        const products = await response.json();
        const { total, products: productList } = products;

        const currentPage = Math.floor(params.skip / params.limit) + 1;

        totalCountEl.textContent = total;
        renderProducts(productList);
        renderPagination(total, params.limit, currentPage);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

// Event delegation cho pagination
paginationEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-page]");
    if (!btn || btn.disabled) return;

    const page = parseInt(btn.dataset.page);
    params.skip = (page - 1) * params.limit;
    fetchProducts();
});

fetchProducts();
