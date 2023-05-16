function borrar()
                {
                info.innerHTML = "";
                sect.innerHTML = "";
                }

                function todo(){
                var valor = "";
                function update(valor) { 
                var select = document.getElementById('alumno');
                var option = select.options[select.selectedIndex];
                document.getElementById('value').value = option.value;
                var valor = option.value;
                return valor;
                }
                valor = update(valor);
                fetch("HGT3(LDM).json")
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        update();
                        console.log("Valor fetch: " + valor);
                        valor = update(valor);
                        populateDiv(data);
                        populatePre(data);
                    });


                    function populateDiv(obj) {
                        const section = document.querySelector('#info');
                        const myInfo = document.createElement('h1');
                        section.appendChild(myInfo);
                    }


                    function populatePre(obj) {
                        const section2 = document.querySelector('#sect');
                        const alumnos = obj.alumnos;

                        for (const alumno of alumnos) {
                            const contenedor = document.getElementById("sect");
                            
                            if(alumno.Campus == valor){
                                const tabla = document.createElement("table");
                                tabla.setAttribute("border", "7");
                            
                                section2.appendChild(tabla);

                                let tr = document.createElement("tr");
 
                                let th = document.createElement("th");
                                let thText = document.createTextNode("id");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Nombre");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Sexo");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Campus");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Grado");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Productividad de clase hoy");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Te gusta lo que estudias?");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Actividad");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Deporte");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Tiempo con el movil");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Menos tiempo con el movil");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Horas de sueño");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Serie fav");
                                th.appendChild(thText);
                                tr.appendChild(th);

                                th = document.createElement("th");
                                thText = document.createTextNode("Pelicula fav");
                                th.appendChild(thText);
                                tr.appendChild(th);
 
                                tabla.appendChild(tr);

                                tr = document.createElement("tr");
 
                                    td = document.createElement("td");
                                    td.textContent = `${alumno.id}`;
                                    tr.appendChild(td);
                                
                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Nombre}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Sexo}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Campus}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Grado}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Productividad_clase_hoy}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Te_gusta_lo_que_estudias}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Actividad}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Deporte}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Tiempo_movil}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Menos_tiempo_movil}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Horas_sueño}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Serie}`;
                                    tr.appendChild(td);

                                    td = document.createElement("td");
                                    td.textContent = `${alumno.Pelicula}`;
                                    tr.appendChild(td);

                                    tabla.appendChild(tr);
                                
                                    contenedor.appendChild(tabla);
                                
                                window.onload = sect;
                                
                            }
                        }
                       
                    }

                
                function populate() {
                    fetch("HGT3(LDM).json")
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            update(valor);
                            populateDiv(data);
                            populatePre(data);
                });
                }
            }