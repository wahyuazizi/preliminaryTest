Create table 
karyawan (
	id serial primary key,
	nama varchar(100) not null,
	email varchar(50) not null,
	tanggal_bergabung date not null default current_date
);
create table absensi (
	id serial primary key,
	karyawan_id int,
	tanggal date not null default current_date,
	status_hadir boolean not null default false,
	constraint fk_karyawan foreign key(karyawan_id) references karyawan(id) on delete set null,
	constraint fk_status check(status_hadir)
);

INSERT INTO karyawan(nama, email) VALUES
('zoro', 'zoro@email.com'),
('sanji', 'sanji@email.com');
