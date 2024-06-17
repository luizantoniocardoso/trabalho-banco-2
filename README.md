### Diagrama Simplificado de Entidades e Relacionamentos

- **Equipamentos (1)** ---- **(M) Manutenções**
- **Equipamentos (1)** ---- **(1) Modelo**
- **Equipamentos (M)** ---- **(1) Localizações**
- **Tipos de Manutenção (1)** ---- **(M) Manutenções**
- **Técnicos (1)** ---- **(M) Manutenções**
- **Manutenções (1)** ---- **(M) Histórico de Manutenção**
- **Peças de Reposição (1)** ---- **(M) Manutenções**
- **Peças de Reposição (M)** ---- **(1) Localizações**
- **Manutenções (M)** ---- **(M) Técnicos**
- **Manutenções (M)** ---- **(M) Peças de Reposição**

### Tabelas Principais

#### 1. Equipamentos (Equipments)
- **equipment_id (PK)**: Identificador único do equipamento.
- **name**: Nome do equipamento.
- **description**: Descrição do equipamento.
- **id_model**: Modelo do equipamento.
- **id_categoria_item**: Categoria do equipamento.
- **serial_number**: Número de série.
- **purchase_date**: Data de aquisição.
- **id_location**: Localização do equipamento.

#### 2. Manutenções (Maintenances)
- **maintenance_id (PK)**: Identificador único da manutenção.
- **equipment_id (FK para Equipamentos)**: Referência ao equipamento.
- **maintenance_type_id (FK para Tipos de Manutenção)**: Referência ao tipo de manutenção.
- **scheduled_date**: Data agendada para a manutenção.
- **completion_date**: Data de conclusão da manutenção.
- **status**: Status da manutenção (e.g., pendente, concluída, cancelada).
- **description**: Descrição detalhada da manutenção realizada.
- **type_name**: Nome do tipo de manutenção (e.g., preventiva, corretiva).

#### 3. Técnicos (Technicians)
- **technician_id (PK)**: Identificador único do técnico.
- **name**: Nome do técnico.
- **tel**: Informações de contato do técnico pelo telefone.
- **cpf**: Código identificador de pessoa física.
- **data_nascimento**: Data de nascimento do técnico.
- **specialization_id (FK para Especialização)**: Especialização do técnico.

#### 4. Técnicos em Manutenção (MaintenanceTechnicians)
- **maintenance_id (FK para Manutenções)**: Referência à manutenção.
- **technician_id (FK para Técnicos)**: Referência ao técnico.
- **role_id (FK para Papeis)**: Papel do técnico na manutenção.

#### 5. Tabela de muitos para muitos de peças e equipamentos (equipments_parts)
- **equipments_id**: Identificador único do equipamento.
- **parts_id**: Identificador único da peça.

#### 6. Peças (parts)
- **part_id (PK)**: Identificador único da peça.
- **name**: Nome da peça.
- **description**: Descrição da peça.
- **quantity**: Quantidade em estoque.
- **id_location**: Localização do estoque.

#### 7. Ferramentas (tools)
- **tools_id (PK)**: Identificador único da ferramenta.
- **name**: Nome da ferramenta.
- **quantity**: Quantidade de ferramentas em estoque.
- **description**: Descrição da ferramenta.

#### 8. Peças Utilizadas em Manutenções (MaintenanceParts)
- **maintenance_id (FK para Manutenções)**: Referência à manutenção.
- **part_id (FK para Peças de Reposição)**: Referência à peça de reposição.
- **quantity_used**: Quantidade utilizada na manutenção.

#### 9. Localizações (locations)
- **location_id (PK)**: Identificador único das localizações.
- **name**: Nome da localização.

#### 10. Categoria dos Itens (item_category)
- **category_id (PK)**: Identificador único das categorias.
- **name**: Nome da categoria.
- **description**: Descrição da categoria.

#### 11. Papéis do Técnico (roles)
- **role_id (PK)**: Identificador de papéis dos técnicos.
- **name**: Nome do papel do técnico.
- **description**: Descrição do papel.

### Relacionamentos

- Cada **Equipamento** pode ter várias **Manutenções**.
- Cada **Manutenção** é de um tipo específico definido em **Tipos de Manutenção**.
- Cada **Manutenção** pode envolver vários **Técnicos** e utilizar várias **Peças de Reposição**.
- O **Histórico de Manutenção** armazena eventos importantes para cada manutenção, permitindo rastrear mudanças e atualizações.
