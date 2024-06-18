### Diagrama Simplificado de Entidades e Relacionamentos
- **Equipamentos (1)** ---- **(M) Manutenções**
- **Equipamentos (M)** ---- **(1) Localizações**
- **Equipamentos (M)** ---- **(1) Categoria**
- **Manutenções (M)** ---- **(1) Equipamentos**
- **Técnicos (M)** ---- **(1) especialização**
- **Técnicos em Manutenção (M)** ---- **(M) Técnicos**
- **Técnicos em Manutenção (M)** ---- **(M) Manutenções**
- **Técnicos em Manutenção (M)** ---- **(1) Papel**
- **Equipamentos e Peças (M)** ---- **(1) Equipamentos**
- **Equipamentos e Peças (M)** ---- **(1) Peças**
- **Ficha Tecnica (1)** ---- **(1) Manutenção**
- **Ficha Tecnica Item (M)** ---- **(1) Peças**
- **Ficha Tecnica Item (M)** ---- **(1) Ficha Tecnica **
- **Estoque (1)** ---- **(1) Items**
- **Peças (M)** ---- **(1) Localizações**
- **Ferramentas (M)** ---- **(1) Localizações**

### Tabelas Principais

#### 1. Equipamentos
- **id_equipamento (PK)**: Identificador único do equipamento.
- **nome**: Nome do equipamento.
- **descrição**: Descrição do equipamento.
- **id_modelo**: Modelo do equipamento.
- **id_categoria**: Categoria do equipamento.
- **número_de_série**: Número de série.
- **data_de_aquisição**: Data de aquisição.
- **id_localização**: Localização do equipamento.

#### 2. Manutenções
- **id_manutenção (PK)**: Identificador único da manutenção.
- **id_equipamento (FK para Equipamentos)**: Referência ao equipamento.
- **data_inicio**: Data do inicio da manutenção.
- **data_de_conclusão**: Data de conclusão da manutenção.
- **status**: Status da manutenção (e.g., pendente, concluída, cancelada).
- **descrição**: Descrição detalhada da manutenção realizada.
- **nome_tipo**: Nome do tipo de manutenção (e.g., preventiva, corretiva).

#### 3. Técnicos
- **id_técnico (PK)**: Identificador único do técnico.
- **nome**: Nome do técnico.
- **telefone**: Informações de contato do técnico.
- **cpf**: Código identificador de pessoa física.
- **data_de_nascimento**: Data de nascimento do técnico.
- **id_especialização (FK para Especialização)**: Especialização do técnico.

#### 4. Técnicos em Manutenção
- **id_manutenção (FK para Manutenções)**: Referência à manutenção.
- **id_técnico (FK para Técnicos)**: Referência ao técnico.
- **id_papel (FK para Papéis)**: Papel do técnico na manutenção.

#### 5. Equipamentos e Peças (equipamentos_peças)
- **id_equipamento (PK para Equipamento)**: Identificador único do equipamento.
- **id_peça** (PK para Peças): Identificador único da peça.

#### 6. Ficha Tecnica (ficha_tecnica)
- **id_ficha_tecnica** (PK): Indenfificador único da ficha tecnica.
- **id_manutencao** (FK para Manutenção) : FK para manutenção.

#### 7. Ficha Tecnica Item (ficha_tecnica_item)
- **id_ficha_tecnica_item** (PK): Identificar único da ficha técnica item.
- **id_ficha_tenica** (FK): FK para ficha técnica
- **id_peca** (FK): Fk para peça
- **quantidade**: Quantidade de peças utilizadas.

#### 8. Estoque (estoque)
- **id_estoque**: Indentificador unico do estoque.
- **id_item**: indentificador generico de peças, ferramentas, equipamentos.
- **tipo_item**: Enum( peças, ferramenta, equipamento).
- **quantidade**: quantidade referente aos items em estoque. 

#### 9. Peças
- **id_peça (PK)**: Identificador único da peça.
- **nome**: Nome da peça.
- **descrição**: Descrição da peça.
- **quantidade**: Quantidade em estoque.
- **id_localização**: Localização do estoque.

#### 10. Ferramentas
- **id_ferramenta (PK)**: Identificador único da ferramenta.
- **nome**: Nome da ferramenta.
- **quantidade**: Quantidade de ferramentas em estoque.
- **descrição**: Descrição da ferramenta.
- **id_localizacao**: localização no estoque

#### 11. Localizações
- **id_localização (PK)**: Identificador único das localizações.
- **nome**: Nome da localização.
          
#### 12. Categoria dos Itens
- **id_categoria (PK)**: Identificador único das categorias.
- **nome**: Nome da categoria.
- **descrição**: Descrição da categoria.

#### 13. Papéis dos Técnicos (Papel)
- **id_papel (PK)**: Identificador de papéis dos técnicos.
- **nome**: Nome do papel do técnico.
- **descrição**: Descrição do papel.

#### 14. Modelo do equipamento (modelo)
- **id_modelo (PK)**: Identificador de modelo.
- **nome**: Nome do modelo.
- **descrição**: Descrição do modelo.

#### 15. Categoria do item (categoria)
- **id_categoria (PK)**: Identificador da Categoria.
- **nome**: Nome da Categoria.
- **descrição**: Descrição da Categoria.

#### 16. especialização (especializacao)
- **id_especialização (PK)**: Identificador da especialização.
- **nome**: Nome da especialização.
- **descrição**: Descrição da especialização.

### Relacionamentos

- Cada **Equipamento** pode ter várias **Manutenções**.
- Cada **Equipamento** está localizado em uma **Localização**.
- Cada **Manutenção** é de um tipo específico definido em **Tipos de Manutenção**.
- Cada **Manutenção** pode envolver vários **Técnicos**.
- Cada **Manutenção** pode ter um **Histórico de Manutenção**.
- Cada **Manutenção** pode utilizar várias **Peças de Reposição**.
- Cada **Peça de Reposição** está localizada em uma **Localização**.
- **Manutenções** e **Técnicos** possuem uma relação muitos para muitos através da tabela **Técnicos em Manutenção**.
- **Manutenções** e **Peças de Reposição** possuem uma relação muitos para muitos através da tabela **Peças Utilizadas em Manutenções**.
