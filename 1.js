function getBiodata(nama, umur){

	 return {
        name: nama,
        age: umur,
        address: 'Jl. Tandang Buhit Balige, Toba Samosir',
        hobbies: ['Sepak Bola','Coding', 'Basket', 'Futsal', 'Badminton', 'Catur'],
        is_married: false,
        list_school: [
            {'name' : 'SDK Sanfrancesco Balige',        'year_in' : 2004, 'year_out' : 2010, 'major' : null},
            {'name' : 'SMPN 4 Balige',   'year_in' : 2010, 'year_out' : 2013, 'major' : null},
            {'name' : 'SMAN 2 Soposurung Balige',         'year_in' : 2013, 'year_out' : 2016, 'major' : 'IPA'},
            {'name' : 'ITDEL - Institut Teknologi DEL',     'year_in' : 2017, 'major' : 'Sistem Informasi'},       

        ],
        skills: [
            {'skill_name' : 'HTML',      'level' : 'advanced'},
            {'skill_name' : 'CSS',       'level' : 'advanced'},
            {'skill_name' : 'JAVASCRIPT','level' : 'beginner'},
            {'skill_name' : 'PHP',       'level' : 'beginner'},
            {'skill_name' : 'C#',   'level' : 'advanced'},
            {'skill_name' : 'C++',    'level' : 'advanced'},
            {'skill_name' : 'Java',    'level' : 'beginner'},
            {'skill_name' : 'MySQL', 'level' : 'advanced'}


        ],
        interest_in_coding: true
    };
}

console.log(getBiodata('Kotrel Manurung', 22));