import MenuCard from "./MenuCard";

const MenuList = ({ menu, onEdit }) => {
  if (menu.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white px-5 py-16 text-center">
        <h3 className="text-base font-bold text-gray-900 sm:text-lg">
          Belum ada data Menu
        </h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {menu.map((item) => (
        <MenuCard
          key={item.id}
          nama={item.nama}
          kategori={item.kategori}
          harga={item.harga}
          deskripsi={item.deskripsi}
          stok={item.stok}
          stokAwal={item.stokAwal}
          onEdit={() => onEdit(item)}
        />
      ))}
    </div>
  );
};

export default MenuList;
